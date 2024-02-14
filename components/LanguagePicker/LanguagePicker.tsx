import {Center, Image, Menu, rem} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import {MyLanguages} from "@/utils/my-lanaguages";
import classes from './LanguagePicker.module.css';
import {MyZIndexes} from "@/utils/my-constants";
import Link from "next/link";

export function LanguagePicker() {
    const icon = <IconChevronDown style={{ width: rem(16), height: rem(16) }} />;
    
    const menuItems = MyLanguages.map((item: any) => (
        <Menu.Item key={item.label}>
            <Image src={item.image} width={18} height={18} alt={item.label}/>
        </Menu.Item>
    ));
    
    
            
    return (
        <>
            <Menu trigger="hover" transitionProps={{ exitDuration: 0 }}
                  closeDelay={200} withinPortal zIndex={MyZIndexes.HeaderDropdown}>
                <Menu.Target>
                    <Link href="">
                        <Center>
                            <Image src={MyLanguages[0].image} width={20} height={20} alt={MyLanguages[0].label}/>
                            <IconChevronDown size="0.9rem" stroke={1.5} />
                        </Center>
                    </Link>
                </Menu.Target>
                <Menu.Dropdown>
                    {menuItems}
                </Menu.Dropdown>
            </Menu>
        </>
    );
}