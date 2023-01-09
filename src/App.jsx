import { Container, Paper, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useState } from 'react'
import { END_OF_WORK_DATE } from './assets/constants/date'
import CountDown from './components/CountDown'
import DrawerComp from './components/DrawerComp'
import useBackCount from './hooks/useBackCount'
import useBoolean from './hooks/useBoolean'
import useDarkMode from './hooks/useDarkMode'
import { themeDark, themeLight } from './styles/theme'

export default function App() {
    const [isLight] = useDarkMode(false)
    const [value, setValue] = useState(END_OF_WORK_DATE)
    const [isDrawerOpen, makeFalse, makeTrue] = useBoolean(false)
    const [intervaleD] = useBackCount(value)

    function handleDateChange(value) {
        setValue(value)
    }

    return (
        <ThemeProvider theme={isLight ? themeLight : themeDark}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Container maxWidth={false} component={Paper} elevation={0} square>
                    <DrawerComp
                        value={value}
                        handleDateChange={handleDateChange}
                        isDrawerOpen={isDrawerOpen}
                        makeFalse={makeFalse}
                        makeTrue={makeTrue}
                    />
                    <CountDown intervaleD={intervaleD} />
                </Container>
            </LocalizationProvider>
        </ThemeProvider>
    )
}
