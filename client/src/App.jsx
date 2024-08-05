import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/index.jsx';
import Auth from './Pages/Auth/index.jsx';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" element={
              <NoteProvider>
                <Dashboard />
              </NoteProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
