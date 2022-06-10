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
          CyberPvnkers <Badge>2022</Badge>
        </Title>
        Web3 Nft Collection (Work in progress)
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://cyberpvnkers.vercel.app/">
            https://cyberpvnkers.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Chrome</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span> React </span>
          </ListItem>
          <ListItem>
            <Meta>Utilities</Meta>
            <span> Solidity, Web3</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub Source</Meta>
            <Link href="https://github.com/Arturovj/Cyberpvnkers">
            https://github.com/Arturovj/Cyberpvnkers{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/cyberpvnkers.png"></WorkImage>
      </Container>
    </Layout>
  )
}

export default Work