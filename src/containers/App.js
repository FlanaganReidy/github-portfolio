import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header/Header.js';
import Profile from './Profile.js';

const App = () => {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
