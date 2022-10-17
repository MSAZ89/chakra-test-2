import { Heading } from "@chakra-ui/react"

export default function Header(props){
    return(
        <header>
            <Heading mb='4' as='h1' size='xl'>
                {props.h1}
            </Heading>
            <p>{props.desc}</p>
        </header>
    )
}