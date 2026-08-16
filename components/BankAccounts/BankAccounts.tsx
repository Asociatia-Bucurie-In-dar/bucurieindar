import {Container, Paper, SimpleGrid, Text} from '@mantine/core';
import {IconBuildingBank} from '@tabler/icons-react';
import {useTranslations} from 'next-intl';
import {TitleWithDescription} from '@/components/Common/TitleWithDescription';
import commonClasses from '@/utils/commonClasses.module.css';
import classes from './BankAccounts.module.css';

const ACCOUNTS = [
    {iban: 'RO42BTRLRONCRT0610749701', currencyKey: 'CURRENCY_RON'},
    {iban: 'RO89BTRLEURCRT0610749701', currencyKey: 'CURRENCY_EUR'},
    {iban: 'RO93BTRLUSDCRT0610749701', currencyKey: 'CURRENCY_USD'},
] as const;

export function BankAccounts() {
    const t = useTranslations('BANK_ACCOUNTS');
    const projectsMoreT = useTranslations('PROJECTS_MORE');

    return (
        <Container size="full" className={commonClasses.darkerBackground}>
            <Container size="lg" className={classes.wrapper}>
                <TitleWithDescription title={t('TITLE')} description={t('DESCRIPTION')}/>

                <SimpleGrid cols={{base: 1, sm: 3}} className={classes.grid}>
                    {ACCOUNTS.map((account) => (
                        <Paper key={account.iban} withBorder p="md" radius="md" className={classes.account}>
                            <Text size="xs" fw={500} className={classes.label} mb={4}>
                                {t(account.currencyKey)}
                            </Text>
                            <Text size="sm" ff="monospace" fw={700} className={classes.iban}>
                                {account.iban}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                <Text ta="center" mt="lg" size="sm" c="dimmed">
                    <IconBuildingBank size={16} style={{verticalAlign: 'middle', marginRight: 6}}/>
                    {t('BANK')} · {projectsMoreT('SWIFT')}: BTRLRO22
                </Text>
            </Container>
        </Container>
    );
}
