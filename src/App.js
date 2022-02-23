import './functionBased/App.css';
// component file
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <TodoContainer />
      </Router>
    </div>
  );
}

export default App;
