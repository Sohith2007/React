import './App.css';
import Calculator from './pages/Calculator';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Result from './pages/Result'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/"  component={<Calculator/>} />
      <Route path="/result/:result" component={<Result/>} />
    </Routes>
  </Router>
  );
}

export default App;
