import { Box } from "@chakra-ui/react"

export default function MyCard(props){
    return (
        <Box boxShadow='lg' p='4' rounded='md' bg='white'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </Box>
    )
}