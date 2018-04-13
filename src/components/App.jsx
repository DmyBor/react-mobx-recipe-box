import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import List from './list.jsx'
import '../styles/App.scss';
import stores from '../stores'

const storesWithRouting = Object.assign(stores)

class App extends Component {
  render() {
    return (
      <Provider {...storesWithRouting}>
        <div className="App">
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
