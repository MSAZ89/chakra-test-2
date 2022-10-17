import { Box, Heading } from "@chakra-ui/react"

export default function MyCard(props){
    return (
        <Box boxShadow='lg' p='4' rounded='md' bg='white'>
            <Heading as='h2' size='md'>{props.title}</Heading>
            <p>{props.desc}</p>
        </Box>
    )
}