import React from 'react';
import './App.css';
import {ConfigureStore} from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';

const store  = ConfigureStore();

function App() {
  return (
    <div className="App"> 
      return (
      <Provider store = {store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );  
    </div>
  );
}

export default App;
