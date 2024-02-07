import { useState } from 'react';
import { Switch, useMantineTheme, useMantineColorScheme, rem } from '@mantine/core';

export function ThemeSwitcher() {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    const [checked, setChecked] = useState(false);
    

    const sunIcon = (
        <div></div>
    );

    const moonIcon = (
        <div></div>
    );

    return <Switch checked={isDark} onChange={(event) => {
        toggleColorScheme()
    }
    } 
                   size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}