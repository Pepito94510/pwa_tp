import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import { useEffect } from 'react';



function App() {

  // useEffect(
  //   async () => {
  //     await fetch('https://jsonplaceholder.typicode.com/users')
  //   }
  // )
  
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Blog1" element={<Blog1 />}></Route>
            <Route path="/Blog2" element={<Blog2 />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;


