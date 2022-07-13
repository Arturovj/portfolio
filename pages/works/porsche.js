import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Metamask">
            <Container>
                <Title>
                    Porsche Web3 <Badge>2022</Badge>
                </Title>
                Porsche Web3 (Work in progress)
                <List ml={4} my={4}>
                    <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://porsche-arturo-vivar.vercel.app/'>
                    https://porsche-arturo-vivar.vercel.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Google Chrome
                            Metamask chrome extension
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js, Node.js, React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Utilities</Meta>
                        <span> Three.js ,Solidity, Web3</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub Source</Meta>
                        <Link href='https://github.com/Arturovj/Porsche'>
                        https://github.com/Arturovj/Porsche <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                </List>
            
                <WorkImage src="/images/contents/porsche.png">

</WorkImage>
            </Container>
        </Layout>
    )

}

export default Work