import CenteredForm from './components/FormTemp';
import UserLookupForm from './components/userLookup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Add</Link></li>
            <li><Link to="/get">Get</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<CenteredForm />} />
        <Route path="/get" element={<UserLookupForm />} />
      </Routes>
      </div>  
    </Router>
  )
}

export default App
