import React, { Component } from 'react';
import ChildCls4 from './ChildCls4';

class ChildCls3 extends Component {
  render() {
    return (
      <>
        <h5>Inside ChildClsComp1</h5>
        <ChildCls4/>
      </>
    );
  }
}

export default ChildCls3;