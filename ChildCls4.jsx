import React, { Component } from 'react';
import ClsContext from './Context';

class ChildCls4 extends Component {
  static contextType = ClsContext;

  render() {
    const { message, name } = this.context;

    return (
      <>
        <h5> Inside ChildClsComp4</h5>

        This Message is from Context Class Component: {message}
        <br />
        It's Me: {name}
      </>
    );
  }
}

export default ChildCls4;
