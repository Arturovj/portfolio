import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbMetamaskLogger from '../public/images/contents/metamask-logger.png'
import thumbTesla from '../public/images/contents/tesla.png'
import thumbCyberpvnkers from '../public/images/contents/cyberpvnkers.png'
import thumbPorsche from '../public/images/contents/porsche.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            title="Porsche Web3"
            thumbnail={thumbPorsche}
            href="https://porsche-arturo-vivar.vercel.app/"
          >
            {' '}
            Porsche Web3 (Work in progress)
          </GridItem>
          <GridItem
            title="Metamask Logger"
            thumbnail={thumbMetamaskLogger}
            href="https://metamask-logger.vercel.app/"
          >
            {' '}
            An easy App/Component to implement metamask login to your web/app
            YOU NEED METAMASK CHROME EXTENSION!
          </GridItem>
          <GridItem
            title="Tesla Web3"
            thumbnail={thumbTesla}
            href="https://tesla-vert.vercel.app/"
          >
            {' '}
            Tesla Web3 (Work in progress)
          </GridItem>

          <GridItem
            title="Cyberpvnkers"
            thumbnail={thumbCyberpvnkers}
            href="https://cyberpvnkers.vercel.app/"
          >
            {' '}
            Cyberpvnkers (Work in progress) Web3 NFT collection.
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
