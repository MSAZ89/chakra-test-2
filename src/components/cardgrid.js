import MyCard from "./mycard"
import { SimpleGrid } from '@chakra-ui/react'

export default function CardGrid(){
    return (
        <SimpleGrid minChildWidth='200px' columns={2} spacing={5}>
            <MyCard title="title" desc="desciption text." />
            <MyCard title="title 2" desc="desciption text 2." />
        </SimpleGrid>
    )
}