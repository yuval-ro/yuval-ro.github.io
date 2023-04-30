import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as pages from './pages';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<pages.home />} />
        <Route path='/about' element={<pages.about />} />
        <Route path='/*' element={<pages.notFound />} />
      </Routes>
    </Router>
  );
};

export default App;