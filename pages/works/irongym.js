import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
// import P from '../..components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="IronGym">
      <Container>
        <Title>
          IronGym <Badge>2022</Badge>
        </Title>
        Find and write a review of the best Gyms near to you
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://arturo-modulo-2.herokuapp.com/">
              https://arturo-modulo-2.herokuapp.com/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>All Browsers</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, Express</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/irongym.jpg"></WorkImage>
      </Container>
    </Layout>
  )
}

export default Work
