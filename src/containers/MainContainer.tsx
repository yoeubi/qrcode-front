import React, { Component } from 'react';
import Nav from '../components/Nav';
import List from './../components/List';
import { StoreState } from './../modules/index';
import { connect } from 'react-redux';
import { Category } from '../types';
import { RouteComponentProps } from 'react-router-dom';
import { Product, Cart } from './../types/index';
import { addCart } from '../modules/cart';
import { Dispatch } from 'redux';
import Modal from './../components/Modal';
import Add from './../components/Add';

interface Props extends RouteComponentProps {
  categories: Category[] | null;
  addCart: (cart: Cart) => void;
}

interface State {
  selectedProduct: Product | null;
  isSubmit: boolean;
}

class MainContainer extends Component<Props, State> {
  id: number = 0;
  state = {
    selectedProduct: null,
    isSubmit: false,
  };
  componentWillUnmount() {
    if (this.id) {
      clearTimeout(this.id);
    }
  }
  selectProductFromCategory(categories: Category[]) {
    const query = new URLSearchParams(location.search).get('category');
    let products: Product[];
    if (query) {
      const [result] = categories.filter(c => c.type === query);
      products = result.products;
    } else {
      const result = categories.reduce((prev: Array<Product>, current) => {
        prev.push(...current.products);
        return prev;
      }, []);
      products = result;
    }
    return products;
  }
  onModal = (product: Product) => {
    this.setState(() => ({
      selectedProduct: product,
    }));
    document.body.style.overflow = 'hidden';
  };
  onClose = () => {
    this.setState(() => ({ selectedProduct: null }));
    document.body.style.overflow = 'auto';
  };
  onSubmit = (cart: Cart) => {
    const { addCart } = this.props;
    addCart(cart);
    this.setState({ isSubmit: true });
    if (this.id) {
      clearTimeout(this.id);
    }
    this.id = setTimeout(() => {
      this.setState({ isSubmit: false });
    }, 2000);
  };
  render() {
    const { categories } = this.props;
    const { selectedProduct, isSubmit } = this.state;
    if (categories === null) {
      return null;
    }
    const category = categories.map(c => c.type);
    const products = this.selectProductFromCategory(categories);
    return (
      <>
        <Nav category={category} />
        <List
          products={products}
          onClose={this.onClose}
          onModal={this.onModal}
          selectedProduct={selectedProduct}
          onSubmit={this.onSubmit}
        />
        {isSubmit && (
          <Modal>
            <Add />
          </Modal>
        )}
      </>
    );
  }
}

function mapStateToProps(state: StoreState) {
  return {
    categories: state.list.categories,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addCart: (payload: Cart) => dispatch(addCart(payload)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
