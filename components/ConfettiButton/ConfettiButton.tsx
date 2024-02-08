"use client";
import Link from "next/link";
import {Button} from "@mantine/core";
import confetti from "canvas-confetti";
import {MyRoutePaths} from "@/utils/route-paths";


export function ConfettiButton(props: any) {
    const confettiClicked = () => {
        confetti({
            // Customize your confetti here
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };
    
    return (
        <Link href={MyRoutePaths.Projects.link} passHref>
                <Button onClick={confettiClicked}
                        variant="gradient"
                        gradient={{ from: 'pink', to: 'yellow', deg: 90 }}
                        name={MyRoutePaths.Projects.label}
                        size={props.size}
                        mt={props.mt}
                >
                    {props.text}
                </Button>
            </Link>
    );
}