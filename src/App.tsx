import React, { Component } from 'react';
import cn from 'classnames/bind';
import styles from './App.scss';
import Header from './components/Header';
import { Route } from 'react-router';
import CartPage from './pages/CartPage';
import MainContainer from './containers/MainContainer';
const cx = cn.bind(styles);

class App extends Component<{}> {
  render() {
    return (
      <div className={cx('app')}>
        <Header />
        <div className={cx('main')}>
          <Route exact={true} path="/" component={MainContainer} />
          <Route exact={true} path="/cart" component={CartPage} />
        </div>
      </div>
    );
  }
}

export default App;
