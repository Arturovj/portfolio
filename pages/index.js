import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Button,
  SimpleGrid,
  Icon,

} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bios'
import { GridItem } from '../components/grid-item'
import { 
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoReact,
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoCode
} from 'react-icons/io5'

const Page = () => {
  return (
      <Layout>
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
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1992</BioYear>
          Born in Brussels, Belgium.
        </BioSection>
        <BioSection>
          <BioYear>2011 - 2014</BioYear>
          Finance and accounting Universidad Carlos III
        </BioSection>
        <BioSection>
          <BioYear>2014 - 2015</BioYear>
          Master in Banking and Financial Consulting CEF
        </BioSection>
        <BioSection>
          <BioYear>2015 to Present</BioYear>
          Freelancer as SoundEngineer.
        </BioSection>
        <BioSection>Teacher at SAE institute Madrid.</BioSection>
        <BioSection>Producer at WARNER MUSIC GROUP.</BioSection>
        <BioSection>Producer at GoPro company.</BioSection>
        <BioSection>Ironhack Full Stack Developer Student</BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding, Music, Friends & Family.
        </Paragraph>
      </Section>

      <Section>
      <Heading as="h3" variant="section-title">
          Human Languages
        </Heading>
        <BioSection>
          French: Native
        </BioSection>
        <BioSection>
        Spanish: Native
        </BioSection>
        <BioSection>
        English: Proficient
        </BioSection> 
      </Section>

      <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
          Coding Languages
        </Heading>
        <List>
            <ListItem>
                <Link href='' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoLogoReact}/>} >
                        REACT
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoLogoHtml5}/>} >
                    HTML
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoLogoCss3}/>} >
                        CSS
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoLogoJavascript}/>} >
                        JAVASCRIPT
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoCode}/>} >
                        SOLIDITY
                    </Button>
                </Link>
            </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
          Stacks
        </Heading>
        <List>
            <ListItem>
                Node.js
            </ListItem>
            <ListItem>
               Express.js
            </ListItem>
            <ListItem>
               MongoDB
            </ListItem>
            <ListItem>
                Mongoose
            </ListItem>
            <ListItem>
                Next.js
            </ListItem>
            <ListItem>
                socket.io
            </ListItem>
            <ListItem>
               Three.js
            </ListItem>
        </List>
      </Section>
      <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
          Tools
        </Heading>
        <List>
            <ListItem>
                SmartContracts
            </ListItem>
            <ListItem>
                Git
            </ListItem>
            <ListItem>
                GitHub
            </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
        </Heading>
        <List>
            <ListItem>
                <Link href='https://github.com/Arturovj' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoLogoGithub}/>} >
                        @Arturovj
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='https://instagram.com/arturovivar92' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoLogoInstagram}/>} >
                    @arturovivar92
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='https://es.linkedin.com/in/arturo-vivar-jimenez-16bb01a7' target="_blank">
                    <Button variant="ghost" colorSchme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>} >
                        @Arturo Vivar Jimenez
                    </Button>
                </Link>
            </ListItem>
        </List>
      </Section>
    </Container>
    </Layout>
  )
}

export default Page
