import {Card, Image, Text, Progress, CardSection, Button, Container} from '@mantine/core';

import classes from './ProjectPreviewCard.module.css';
import Link from "next/link";
import {ProjectType} from "@/utils/my-types";
import {MyRoutePaths} from "@/utils/route-paths";
import {DonatePopupButton} from "@/components/Popups/DonatePopup/DonatePopupButton";
import {ProjectDonationProgress} from "@/components/Projects/ProjectDonationProgress";

export function ProjectPreviewCard(props: { project: ProjectType, title: string, description: string} ) {
    
    const linkProps = {
        href: MyRoutePaths.Projects + '/' + props.project.slug
    };
    
    return (
            <Card withBorder radius="md" className={classes.card}>
                <CardSection>
                    <Link {...linkProps}>
                        <Image src={props.project.image_path} 
                               height={200}
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

                <Text fz="sm" c="dimmed" lineClamp={4} component={Link} {...linkProps}>
                    {props.description}
                </Text>

                <Card padding={0} mt="sm" key={props.project.id}>
                    
                    <ProjectDonationProgress id={props.project.id} goalAmount={props.project.goalAmount}/> 

                    <DonatePopupButton projectId={props.project.id} projectTile={props.title}/>
                </Card>
            </Card>
    );
}