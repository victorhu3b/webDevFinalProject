import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import AboutTxt from './Components/AboutTxt';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <NavBar/>
    </div>
    <AboutTxt />
  
  </ChakraProvider>
  );
}

export default App;
