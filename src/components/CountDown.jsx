import { Divider, Stack, Typography } from '@mui/material'

export default function CountDown({ intervaleD }) {
    return (
        <Stack alignItems='center' justifyContent='center' sx={{ minHeight: '100vh' }}>
            <Stack direction='row' gap={2}>
                {intervaleD?.days !== 0 && (
                    <Stack gap={4} alignItems='center' justifyContent='center' marginRight={4}>
                        <Typography variant='h3' sx={{ fontFamily: "'Courier Prime', monospace" }}>
                            {intervaleD?.days < 10 ? '0' + intervaleD?.days : intervaleD?.days}
                        </Typography>
                        <Typography fontWeight='800' letterSpacing={4}>
                            DÍAS
                        </Typography>
                    </Stack>
                )}
                <Stack gap={4} alignItems='center' justifyContent='center'>
                    <Typography variant='h3' sx={{ fontFamily: "'Courier Prime', monospace" }}>
                        {intervaleD?.hours < 10 ? '0' + intervaleD?.hours : intervaleD?.hours}
                    </Typography>
                    <Typography fontWeight='800' letterSpacing={4}>
                        HORAS
                    </Typography>
                </Stack>
                <Stack gap={4} alignItems='center' justifyContent='center'>
                    <Typography variant='h3' sx={{ fontFamily: "'Courier Prime', monospace" }}>
                        {intervaleD?.minutes < 10 ? '0' + intervaleD?.minutes : intervaleD?.minutes}
                    </Typography>
                    <Typography fontWeight='800' letterSpacing={4}>
                        MIN
                    </Typography>
                </Stack>
                <Stack gap={4} alignItems='center' justifyContent='center'>
                    <Typography variant='h3' sx={{ fontFamily: "'Courier Prime', monospace" }}>
                        {intervaleD?.seconds < 10 ? '0' + intervaleD?.seconds : intervaleD?.seconds}
                    </Typography>
                    <Typography fontWeight='800' letterSpacing={4}>
                        SEG
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
