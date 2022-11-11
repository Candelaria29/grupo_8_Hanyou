import './App.css';
import Sidebar from './components/sidebar';
import Main from './components/main';
import New from './components/new';

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Main /> */}
      <New/>
     
    </div>
  );
}

export default App;
