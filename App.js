import React from 'react'
import NavBar from './NavBar.js'
import MainComponent from './MainComponent'


class App extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <MainComponent />
      </div>
    );
  }
}

export default App
