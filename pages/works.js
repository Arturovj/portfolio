import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbRoyalty from '../public/images/works/royalty.png'
import thumbIronGym from '../public/images/works/irongym.jpg'
import thumbGopro from '../public/images/works/gopro.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid COLUMNS={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="royalty" title="Royalty" thumbnail={thumbRoyalty}>
                        Web3 built platform to share artists royalties.
                        Internal chat with Socket.io.
                        Smart Contracts with solidity.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="irongym" title="IronGym" thumbnail={thumbIronGym}>
                        Web to find and write reviews of gyms near you. Used Html,Javascript,CSS,Express...
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="gopro" title="GoPro" thumbnail={thumbGopro}>
                        GoPro soundtrack.
                        Near 100.000.000 streams across all platforms.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
