import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
// import P from '../..components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="GoPro">
      <Container>
        <Title>
          GoPro <Badge>2016</Badge>
        </Title>
        Soundtrack for the most watched GoPro video. 
        Featured on the Canada Xgames
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.youtube.com/watch?v=TpN7wHFV9nc&t=2s">
            https://www.youtube.com/watch?v=TpN7wHFV9nc&t=2s{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>All Browsers</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Ableton Live</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/gopro.png"></WorkImage>
      </Container>
    </Layout>
  )
}

export default Work