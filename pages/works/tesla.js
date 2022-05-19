import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
// import P from '../..components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Tesla">
      <Container>
        <Title>
          Tesla <Badge>2022</Badge>
        </Title>
        Tesla Web3 built platform. Smart Contracts with solidity.
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://tesla-vert.vercel.app/">
              https://tesla-vert.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>All Browsers</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span> React, Three.js</span>
          </ListItem>
          <ListItem>
            <Meta>Utilities</Meta>
            <span> Solidity, Web3</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub Source</Meta>
            <Link href="https://github.com/Arturovj/tesla">
            https://github.com/Arturovj/tesla{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/tesla.png"></WorkImage>
      </Container>
    </Layout>
  )
}

export default Work
