import './App.css';
import { Container, Box, Button } from '@chakra-ui/react';
import Header from './components/header';
import CardGrid from './components/cardgrid';
import { useState } from 'react';

let newCardId = 0;

function App() {

  const [data, setData] = useState([])

  function AppendData(){
    newCardId++;
    setData((array) => [...array, {title: "card " + newCardId, desc: "card " + newCardId + " description"}]);
    //console.log(newCardId);
  }

  function FilterAndUpdateData(){
    if (newCardId >= 1) {
      newCardId--;
      setData((data) => data.filter((_, lastItem) => lastItem !== data.length - 1));
      //console.log(data);
    }
  }

  return (
    <Container maxW='7xl' className='App'>
      <Box boxShadow='lg' p='6' rounded='md' bg='gray.100' mt="4">
        <Header h1='Page Title' desc="Page Description"/>
        <Button variant='outline' size='sm' colorScheme='blue' onClick={() => AppendData()}>Append</Button>
        <Button variant='outline' size='sm' colorScheme='blue' onClick={() => FilterAndUpdateData()}>Remove</Button>
        <br/><br/>
        <CardGrid data={data}/>
      </Box>
    </Container>
  );
}

export default App;
