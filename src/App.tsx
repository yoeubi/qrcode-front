import React, { Component } from 'react';
import cn from 'classnames/bind';
import styles from './App.scss';
import { Route } from 'react-router';
import MainContainer from './containers/MainContainer';
import CartListContainer from './containers/CartListContainer';
import Header from './components/Header';

const cx = cn.bind(styles);

class App extends Component<{}> {
  render() {
    return (
      <div className={cx('app')}>
        <Header />
        <div className={cx('main')}>
          <Route exact={true} path="/" component={MainContainer} />
          <Route exact={true} path="/cart" component={CartListContainer} />
        </div>
      </div>
    );
  }
}

export default App;
