import React, { Component } from 'react'
import Counter from './Counter'
class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null,
         errorinofo:null,
         hasError: false
      }
    }
     componentDidCatch(error1, errorinofo1) {
        this.setState(
            {
                error: error1,
                errorinofo: errorinofo1,
                hasError: true
            }
        )
     }
  render() {
    if(this.state.hasError){
        return(
            <>
             <h2>An Error Occured</h2>
             <details>
                 {this.state.error &&  this.state.error.toString()}
                 <br/>
                 {this.state.errorinofo.componentStack}
                 <h6>Chrome will let you know when this page is ready. Cancel</h6>
                 <h6>Connect to the Server </h6>

             </details>
            
            </>
        )
    }
    return <Counter/>
  }
}
export default ErrorBoundary;