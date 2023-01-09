import { Typography } from '@mui/material'
import { Stack } from '@mui/system'

export default function NumTextCombo({ num, text }) {
    return (
        <Stack gap={4} alignItems='center' justifyContent='center'>
            <Typography variant='h3' sx={{ fontFamily: "'Courier Prime', monospace" }}>
                {num}
            </Typography>
            <Typography fontWeight='800' letterSpacing={4}>
                {text}
            </Typography>
        </Stack>
    )
}
