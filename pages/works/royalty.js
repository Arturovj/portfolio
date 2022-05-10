import { Container , Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
// import P from '../..components/paragraph'
import Layout from  '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="Royalty">
            <Container>
                <Title>
                    Royalty <Badge>2022</Badge>
                </Title>
               
                    Web3 built platform to share artists royalties
               
                <List ml={4} my={4}>
                    <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://royaltyapp.netlify.app/'>
                    https://royaltyapp.netlify.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All Browsers</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Node.js, Express, React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Utilities</Meta>
                        <span>socket.io, Solidity, Web3</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub Source</Meta>
                        <Link href='https://github.com/Arturovj/Royalty-web'>
                        https://github.com/Arturovj/Royalty-web <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/royalty.png">

                </WorkImage>
                <WorkImage src="/images/works/royalty2.png">

                </WorkImage>
            </Container>
        </Layout>
    )
}

export default Work