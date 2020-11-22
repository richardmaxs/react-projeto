import React, { Component, useState } from 'react';
import './App.css';


const App = () => {
  return(
    <div className="App">

    </div>
  )


}





/* como uma função 

const App = () => {
  const [showImage, setShowImage] =  useState(false);

  const mudar = () => {
    setShowImage(!showImage);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={mudar}>
          {showImage ? 'Esconder' : 'Mostrar' }
        </button>
        {showImage  && (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/







/* como uma classe 

class App extends Component{  

  constructor(props){
    super(props);

    this.state = {
      showImage : false,
    };
  }

  mudar = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.mudar}>
            {this.state.showImage ? 'Esconder' : 'Mostrar' }
          </button>
          {this.state.showImage  && (
            <img src={logo} className="App-logo" alt="logo" />
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
