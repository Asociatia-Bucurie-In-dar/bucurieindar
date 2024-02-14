import {Card, Image, Text, Progress, CardSection, Button, Container} from '@mantine/core';

import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";

import classes from './ProjectPreviewCard.module.css';
import Link from "next/link";
import {ProjectType} from "@/utils/my-types";
import {MyRoutePaths} from "@/utils/route-paths";
import {DonatePopupButton} from "@/components/Popups/DonatePopup/DonatePopupButton";

const imagesFolder = '/projects/';

export function ProjectPreviewCard(props: ProjectType ) {
    
    const linkProps = {
        href: MyRoutePaths.Projects.link + '/' + props.slug
    };
    
    return (
            <Card withBorder radius="md" className={classes.card}>
                <CardSection>
                    <Link {...linkProps}>
                        <Image src={imagesFolder + props.image_name} 
                               height={180}
                               loading={"lazy"}
                            placeholder="blur"/>
                    </Link>
                </CardSection>

                {/*<Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>*/}
                {/*    outstanding*/}
                {/*</Badge>*/}

                <Text className={classes.title} fw={500} component={Link} {...linkProps}>
                    {props.title}
                </Text>

                <Text fz="sm" c="dimmed" lineClamp={3} component={Link} {...linkProps}>
                    {props.content}
                </Text>

                <Card padding={0} mt="sm">
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed" mt="sm">
                        Suma Necesară
                    </Text>
                    
                    {/*SEPARATE*/}
                    <Text fz="lg" fw={500}>
                        ${props.currentAmount} / ${props.goalAmount}
                    </Text>
                    <Progress animated value={(props.currentAmount/props.goalAmount) * 100} mt="sm" size="lg" radius="xl"
                              classNames={{
                                  root: classes.progressTrack,
                                  section: classes.progressSection,
                              }}/>
                    {/*SEPARATE*/}

                    <DonatePopupButton projectId={props.id} projectTile={props.title}/>
                </Card>
            </Card>
    );
}