import React, { Component, useState } from 'react';

import PromotionCard from './components/Promotion/Card/Card';

const App = () => {

  const promotion = {
    "id": 1,
    "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
    "price": 1799,
    "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem_url/2631517face1861bc4f46ae154d387de.png",
    "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=gatry0b-20&linkId=e4a1146599e36741a720a6a952cbc328&language=pt_BR",
    "comments": [
      {
        "id": 1,
        "comment": "TELA HD"
      }
    ]
  }


  return(
    <div className="App" 
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      <PromotionCard promotion={promotion}/>
    </div>
  );

}
export default App;





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

