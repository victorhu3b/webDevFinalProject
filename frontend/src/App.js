import './App.css';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  
  );
}

export default App;
