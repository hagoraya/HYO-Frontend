import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//Components
import Header from './components/Header/header'
import About from './components/about/about'
import Main from './components/main/main'
import Result from './components/result/result'


import './index.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Route exact path="/" component={Main}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/result" component={Result}></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
