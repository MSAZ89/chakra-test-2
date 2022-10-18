import MyCard from "./mycard"
import { SimpleGrid } from '@chakra-ui/react'

export default function CardGrid(props){
    
    const cardList = props.data.map((item) => {
        return (
          <MyCard key={item.title} title={item.title} desc={item.desc}/>
        )
    });

    return (
        <SimpleGrid maxW="full" minChildWidth='200px' columns={2} spacing={25}>
            {cardList}
        </SimpleGrid>
    )
}