import React, { Component } from 'react';
import cn from 'classnames/bind';
import styles from './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import List from './components/List';
const cx = cn.bind(styles);

class App extends Component<{}> {
  render() {
    return (
      <div className={cx('app')}>
        <Header />
        <Nav />
        <List />
      </div>
    );
  }
}

export default App;
