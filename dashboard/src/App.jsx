import './App.css';
import Sidebar from './components/sidebar';
import Main from './components/main';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Main/>
    </div>
  );
}

export default App;
