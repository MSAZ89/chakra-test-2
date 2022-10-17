import { Box, Heading } from "@chakra-ui/react"

export default function Header(props){
    return(
        <Box boxShadow='xs' p='6' rounded='md' bg='gray.100' mt="4">
            <header>
                <Heading mb='4' as='h1' size='xl'>
                    {props.h1}
                </Heading>
                <p>{props.desc}</p>
            </header>
        </Box>
    )
}