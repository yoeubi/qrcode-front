import React, { Component } from 'react';
import Nav from '../components/Nav';

class NavContainer extends Component {
  render() {
    const category = [
      '전체',
      '콜드 브루 커피',
      '브루드 커피',
      '에스프레소',
      '프라푸치노',
      '블렌디드',
      '스타벅스 피지오',
      '티',
    ];
    return <Nav category={category} />;
  }
}

export default NavContainer;
