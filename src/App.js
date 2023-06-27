import './App.css';
import * as React from 'react'
// import Login from './Login/Login';
import Header from './SinglePage/Header/Header';
import LeftMenu from './SinglePage/LeftMenu/LeftMenu';
import Body from './SinglePage/Body/Body'

function App() {
  return (
    // <div className="App">
    //   <a>Hello</a>
    //   <Login/>
    // </div>
    <div className="App">
      <div>
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
