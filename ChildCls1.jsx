import React, { Component } from 'react';
import ChildCls2 from './ChildCls2';

class ChildCls1 extends Component {
  render() {
    return (
      <>
        <h5>Inside ChildClsComp1</h5>
        <ChildCls2/>
      </>
    );
  }
}

export default ChildCls1;
