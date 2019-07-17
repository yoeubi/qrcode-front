import React, { Component } from 'react';
import cn from 'classnames/bind';
import styles from './App.scss';
import Header from './components/Header';
import { Route } from 'react-router';
import MainPage from './pages/MainPage';
const cx = cn.bind(styles);

class App extends Component<{}> {
  render() {
    return (
      <div className={cx('app')}>
        <Header />
        <Route exact={true} path="/" component={MainPage} />
      </div>
    );
  }
}

export default App;
