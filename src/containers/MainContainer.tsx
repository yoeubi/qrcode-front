import React, { Component } from 'react';
import Nav from '../components/Nav';
import List from './../components/List';
import { StoreState } from './../modules/index';
import { connect } from 'react-redux';
import { Category } from '../types';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from './../types/index';

interface Props extends RouteComponentProps {
  categories: Category[] | null;
}

class MainContainer extends Component<Props> {
  selectProductFromCategory(categories: Category[]) {
    const query = new URLSearchParams(location.search).get('category');
    let products: Product[];
    if (query) {
      const [result] = categories.filter(c => c.type === query);
      products = result.products;
    } else {
      const [result] = categories.map(c => c.products);
      products = result;
    }
    return products;
  }
  render() {
    const { categories } = this.props;
    if (categories === null) {
      return null;
    }
    const category = categories.map(c => c.type);
    const products = this.selectProductFromCategory(categories);
    return (
      <>
        <Nav category={category} />
        <List products={products} />
      </>
    );
  }
}

function mapStateToProps(state: StoreState) {
  return {
    categories: state.list.categories,
  };
}

export default connect(mapStateToProps)(MainContainer);
