import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Metamask">
            <Container>
                <Title>
                    Metamask Logger <Badge>2022</Badge>
                </Title>
                An easy App/Component to implement metamask login to your web/app
                <List ml={4} my={4}>
                    <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://metamask-logger.vercel.app/'>
                    https://metamask-logger.vercel.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Google Chrome</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Node.js, React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Utilities</Meta>
                        <span> Three.js ,Solidity, Web3</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub Source</Meta>
                        <Link href='https://github.com/Arturovj/Metamask-logger'>
                        https://github.com/Arturovj/Metamask-logger <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                </List>
            
                <WorkImage src="/images/contents/metamask-logger.png">

</WorkImage>
            </Container>
        </Layout>
    )

}

export default Work