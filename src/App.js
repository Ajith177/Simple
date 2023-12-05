// import logo from './logo.svg';
import './index.css';
import './App.css';
import First from './First';
import Second from './Second';
import {BrowserRouter as Router,Routes,Route }from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="First" element={<First/>}>
          </Route>
          <Route path="Second" element={<Second/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
