import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './store';
import { Provider } from 'react-redux'
import { YugiohApp } from './yugiohApp.jsx';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <YugiohApp />
    </Provider>  
  </BrowserRouter>
  //</React.StrictMode>,
)
