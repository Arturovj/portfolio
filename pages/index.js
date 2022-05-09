import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos; m a full-stack developer based in Spain
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arturo Vivar Jimenez
          </Heading>
          <p> Developer / Artist / SoundEngineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/arturo.png"
            alt="profileAvatar"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          <p>
            Arturo is a freelance full stack developer. Lover of computers,
            music and programming/coding.
          </p>
          <NextLink href="/works/Royalty">
            <Link>Royalty</Link>
          </NextLink>
          .
        </Paragraph>
       <Box align="center" my={4}>
           <NextLink href="/works">
               <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                   My portfolio
               </Button>
           </NextLink>
        </Box> 
      </Section>
    </Container>
  )
}

export default Page
