import React from 'react';
import './Styles/App.css';
import Header from './Screens/Header/Header'
import Body from './Screens/Body/Body'

class App extends React.Component {
  render()
  {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
