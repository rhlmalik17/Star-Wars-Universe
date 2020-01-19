import React from 'react';
import './Styles/App.css';
import Header from './Screens/Header/Header'
import Pagination from './Screens/Body/Pagination/Pagination'

class App extends React.Component {
 

  render()
  {

    return (
      <div>
        <Header />
        <Pagination />
      </div>
    );
  }
}

export default App;
