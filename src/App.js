import Index from './Home/home.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProjectTemplate from './Projects/poject.js'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<ProjectTemplate />} />
        {/* <Route path="/certifications" element={<Certifications />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
