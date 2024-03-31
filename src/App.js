import Navbar from './components/Navbar';
import Main from './pages/Main';

import './App.css';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Main/>
      </main>
    </div>
  );
}

export default App;
