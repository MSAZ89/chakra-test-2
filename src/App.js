import './App.css';
import { Container} from '@chakra-ui/react';
import Header from './components/header';

function App() {
  return (
    <Container maxW='7xl' className='App'>
      <Header h1='Page Title' desc="Page Description"/>
    </Container>
  );
}

export default App;
