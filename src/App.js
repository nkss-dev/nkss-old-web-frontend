import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Announcements from './components/Announcements';
import Home from './components/Home';
import Notes from './components/Notes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/announcements' element={<Announcements />} />
          <Route exact path='/notes' element={<Notes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
