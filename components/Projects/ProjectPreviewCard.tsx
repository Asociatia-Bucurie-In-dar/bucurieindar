import {Card, Image, Text, Progress, CardSection, Button, Container} from '@mantine/core';

import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";

import classes from './ProjectPreviewCard.module.css';
import Link from "next/link";
import {ProjectType} from "@/utils/my-types";
import {MyRoutePaths} from "@/utils/route-paths";
import {DonatePopupButton} from "@/components/Popups/DonatePopup/DonatePopupButton";
import {ProjectDonationProgress} from "@/components/Projects/ProjectDonationProgress";

export function ProjectPreviewCard(props: ProjectType ) {
    
    const linkProps = {
        href: MyRoutePaths.Projects.link + '/' + props.slug
    };
    
    return (
            <Card withBorder radius="md" className={classes.card}>
                <CardSection>
                    <Link {...linkProps}>
                        <Image src={props.image_path} 
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

                <Card padding={0} mt="sm" key={props.id}>
                    
                    <ProjectDonationProgress id={props.id} goalAmount={props.goalAmount}/> 

                    <DonatePopupButton projectId={props.id} projectTile={props.title}/>
                </Card>
            </Card>
    );
}