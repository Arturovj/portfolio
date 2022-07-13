import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbRoyalty from '../public/images/works/royalty.png'
import thumbIronGym from '../public/images/works/irongym.jpg'
import thumbGopro from '../public/images/works/gopro.png'
import thumbMetamaskLogger from '../public/images/contents/metamask-logger.png'
import thumbTesla from '../public/images/works/tesla.png'
import thumbCyberpvnkers from '../public/images/contents/cyberpvnkers.png'
import thumbPorsche from '../public/images/contents/porsche.png'



const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid COLUMNS={[1,1,2]} gap={6}>
            <Section>
                    <WorkGridItem id="porsche" title="Porsche" thumbnail={thumbPorsche}>
                        Porsche Web3 built platform. (Work in progress)
                        Smart Contracts with solidity.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="royalty" title="Royalty" thumbnail={thumbRoyalty}>
                        Web3 built platform to share artists royalties.
                        Internal chat with Socket.io.
                        Smart Contracts with solidity.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="tesla" title="Tesla" thumbnail={thumbTesla}>
                        Tesla Web3 built platform. (Work in progress)
                        Smart Contracts with solidity.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="irongym" title="IronGym" thumbnail={thumbIronGym}>
                        Web to find and write reviews of gyms near you. Used Html,Javascript,CSS,Express...
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="cyberpvnkers" title="CyberPvnkers" thumbnail={thumbCyberpvnkers}>
                        Web3 Nft Collection (Work in progress)
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="metamask" title="Metamask" thumbnail={thumbMetamaskLogger}>
                    An easy App/Component to implement metamask login to your web/app
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
