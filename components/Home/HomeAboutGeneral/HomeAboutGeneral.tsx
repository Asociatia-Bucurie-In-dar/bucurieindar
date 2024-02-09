
import classes from './HomeAboutGeneral.module.css';
import {Container, SimpleGrid, Title, Text, Image} from "@mantine/core";
import image from '/public/favicon.svg';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

export function HomeAboutGeneral() {
    return <>
        <Container size="md" mt={50} className={classes.wrapper}>
                    <div className={classes.body}>
                        <Title className={classes.title}>Wait a minute...</Title>
                        <Text fw={500} fz="lg" mb={5}>
                            Subscribe to our newsletter!
                        </Text>
                        <Text fz="sm" c="dimmed">
                            Join us in unlocking a child’s potential. Your donation to our cause creates brighter futures, providing essential education, health, and nourishment to children in need. Every contribution brings hope and opens doors to a world of possibilities. Let’s build a brighter tomorrow together. Donate now and make a difference! Your support is vital in our mission to unlock a child’s potential. With each donation, we can offer more than just basic needs; we provide a foundation for lifelong learning and growth. Our programs focus on education, healthcare, and empowering communities to uplift their youngest members. Every dollar you give helps us reach another child, turning small steps today into giant leaps for their future. Your contribution is an investment in a world where every child has the opportunity to thrive. Join us, donate today, and be a part of this transformative journey.
                        </Text>
                    </div>
                    <Image src={image.src} className={classes.image}/>
        </Container>
    </>;
}