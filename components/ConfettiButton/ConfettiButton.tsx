"use client";
import Link from "next/link";
import {Button} from "@mantine/core";
import confetti from "canvas-confetti";


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
        <Link href={"/projects"} passHref>
                <Button onClick={confettiClicked}
                        variant="gradient"
                        gradient={{ from: 'pink', to: 'yellow', deg: 90 }}
                        name={"Donate"}
                        size={props.size}
                        mt={props.mt}
                >
                    {props.text? props.text : "Donate"}
                </Button>
            </Link>
    );
}