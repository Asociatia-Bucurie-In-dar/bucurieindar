import {Container, Grid} from "@mantine/core";
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import classes from './ProjectPreviewCardsSlider.module.css';

export function ProjectPreviewCardsSlider() {

    const projectsData = [
        {id: '1', imagePath: '/public/favicon.svg', title: 'Proiect 1', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 100, donatedSoFar: 33 },
        {id: '2', imagePath: '/public/favicon.svg', title: 'Proiect 2', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 100, donatedSoFar: 33 },
        {id: '3', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 100, donatedSoFar: 33 },
    ];
    
    return (
        <Container>
            <Grid columns={3}>
                {projectsData.map((proj) => {
                    return <ProjectPreviewCard {...proj}/> })}
            </Grid>
        </Container>
    );
}