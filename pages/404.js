import NexLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">
                Not Found
            </Heading>
        <Text>The page you are looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
        <NexLink href="/">
            <Button colorScheme="teal">
                Return to home
            </Button>
        </NexLink>
        </Box>
        </Container>
    )
}

export default NotFound