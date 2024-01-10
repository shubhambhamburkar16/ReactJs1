import React, { Component } from 'react';
import ChildCls3 from './ChildCls3';

class ChildCls2 extends Component {
  render() {
    return (
      <>
        <h5>Inside ChildClsComp2</h5>
        <ChildCls3/>
        
      </>
    );
  }
}

export default ChildCls2;