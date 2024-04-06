import React from "react";
import RefreshButton from "./refreshButton/RefreshButton";
class ErrorBoundaryPromise extends React.Component {
    state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  
    componentDidCatch(error, errorInfo) {
        console.log(error.message)
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo
      });
      
    }
  
    render() {

      if (this.state.hasError) {
        return (
          <div>
            <h2>Oops, algo salió mal.</h2>
            <p>Lo sentimos, se produjo un error en este componente.</p>
            <p>{this.state.error.message}</p>
            <RefreshButton />

          </div>
        );
      }
      return this.props.children;
    }
  }
  export default ErrorBoundaryPromise