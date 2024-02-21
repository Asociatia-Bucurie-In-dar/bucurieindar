import {Paper, Text, Title, Button, SimpleGrid, Container, Avatar, Center, Divider} from '@mantine/core';
import classes from './CompaniesWeWorkWith.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

interface CardProps {
    image: string;
    title: string;
    category: string;
}

const add = "/companies/";

const data = [
    {
        image: "actionlabs.jpeg"
    },
    {
        image: "autototal.jpeg"
    },
];

function CompanyCard({ image }: CardProps) {
    return (
        <Avatar size="xl"
            src={ add + image}
            alt={image}
        />
    );
}

export function CompaniesWeWorkWith() {
    const slides = data.map((item) => (
            <Center>
                <CompanyCard {...item} />
            </Center>
    ));

    return (
        <Container size="full" className={commonClasses.darkerBackground}>
        <Container size="lg" pt={50} pb={65}>
            <TitleWithDescription title={"Parteneri"} 
                                  maxWidth={"700px"}
                description={"Mulțumim partenerilor noștri pentru sprijinul acordat în realizarea proiectelor noastre. Fără ajutorul lor, nu am fi putut ajuta atât de multe persoane."}/>
            
            <Divider mb="xl" color="transparent"></Divider>
            
            <Center>
            <SimpleGrid cols={{ base: 4, sm: 8 }} spacing={75} className={classes.companies} verticalSpacing={35}>
                {slides}
            </SimpleGrid>
            </Center>
        </Container>
        </Container>
    );
}