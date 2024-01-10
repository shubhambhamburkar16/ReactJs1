import React, { Component } from 'react';
import ClsContext from './Context';
import ChildCls1 from './ChildCls1';


class ContextClsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'When you have a dream, you have got to grab it and never let go',
      name: 'Shubham Bhamburkar',
    };
  }

  render() {
    return (
      <>
        <h5> I am in  ContextClsComp!!!!</h5>

        <ClsContext.Provider value={this.state}>
          <ChildCls1 />
        </ClsContext.Provider>
      </>
    );
  }
}

export default ContextClsComp;
