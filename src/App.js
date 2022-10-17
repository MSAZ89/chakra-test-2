import './App.css';
import { Container, Box, Button } from '@chakra-ui/react';
import Header from './components/header';
import CardGrid from './components/cardgrid';
import { useState } from 'react';

function App() {

let newCardId = 1;

const [data, setData] = useState([
  {title: "card 0", desc: "card 0 description"},
])

function AppendData(){
  setData((array) => [...array, {title: "card " + newCardId, desc: "card " + newCardId + " description"}]);
  newCardId++;
  console.log(newCardId);
}

  return (
    <Container maxW='7xl' className='App'>
      <Box boxShadow='lg' p='6' rounded='md' bg='gray.100' mt="4">
        <Header h1='Page Title' desc="Page Description"/>
        <Button onClick={() => AppendData()}>Append</Button>
        <CardGrid data={data}/>
      </Box>
    </Container>
  );
}

export default App;
