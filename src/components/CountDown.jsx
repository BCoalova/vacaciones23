import { Divider, Stack, Typography } from '@mui/material'
import NumTextCombo from './NumTextCombo'

export default function CountDown({ intervaleD }) {
    return (
        <Stack alignItems='center' justifyContent='center' gap={6} sx={{ minHeight: '100vh' }}>
            <Typography variant='h4' component='h1' letterSpacing={2.8}>
                VACACIONES 2023
            </Typography>

            <Stack direction='row' gap={2}>
                {intervaleD?.days >= 0 && (
                    <>
                        <NumTextCombo text='DÍAS' num={intervaleD?.days < 10 ? '0' + intervaleD?.days : intervaleD?.days} />
                        <Divider flexItem orientation='vertical' />
                    </>
                )}
                {intervaleD?.hours >= 0 && (
                    <NumTextCombo text='HORAS' num={intervaleD?.hours < 10 ? '0' + intervaleD?.hours : intervaleD?.hours} />
                )}
                <NumTextCombo text='MIN' num={intervaleD?.minutes < 10 ? '0' + intervaleD?.minutes : intervaleD?.minutes} />
                <NumTextCombo text='SEG' num={intervaleD?.seconds < 10 ? '0' + intervaleD?.seconds : intervaleD?.seconds} />
            </Stack>
        </Stack>
    )
}
