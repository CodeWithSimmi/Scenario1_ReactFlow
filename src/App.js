import React from 'react';
// import logo from './logo.svg';
import './App.css';

import AddButton from './Component/AddButton';



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <>Some thing wrong</>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      
        <AddButton/>
        {/* <Background/>
        <Controls/> */}
    </ErrorBoundary>
  );
}

export default App;