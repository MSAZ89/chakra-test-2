import './App.css';
import { Container, Box, } from '@chakra-ui/react';
import Header from './components/header';
import CardGrid from './components/cardgrid';

function App() {
  return (
    <Container maxW='7xl' className='App'>
      <Box boxShadow='lg' p='6' rounded='md' bg='gray.100' mt="4">
        <Header h1='Page Title' desc="Page Description"/>
        <CardGrid/>
      </Box>
    </Container>
  );
}

export default App;
