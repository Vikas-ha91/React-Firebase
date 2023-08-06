import React from 'react';
import Svgs from '../Assets/Svgs';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { isError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
        console.log(this.props)
      if (this.state.isError) {
        return <h1></h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;