import MenuIcon from '@mui/icons-material/Menu'
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, TextField, Typography } from '@mui/material'
import { MobileDateTimePicker } from '@mui/x-date-pickers'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Stack } from '@mui/system'
import { format } from 'date-fns'
export default function DrawerComp({ value, handleDateChange, isDrawerOpen, makeFalse, makeTrue }) {
    return (
        <>
            <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                gap={4}
                flexWrap='wrap'
                sx={{ position: 'fixed', right: 24, bottom: 16 }}
            >
                <Typography>{format(value, 'dd/MM/yyyy hh:mm')}</Typography>
                <Divider flexItem color='' />
                <Button variant='outlined' color='primary' endIcon={<MenuIcon />} onClick={makeTrue}>
                    Cambiar fecha
                </Button>
            </Stack>
            <Drawer
                anchor='bottom'
                // variant='persistent'
                open={isDrawerOpen}
                onClose={makeFalse}
                PaperProps={{ sx: { borderTopLeftRadius: 8, borderTopRightRadius: 8 } }}
            >
                <Box sx={{ alignSelf: 'flex-end' }}>
                    <IconButton variant='contained' color='error' onClick={makeFalse}>
                        {isDrawerOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    </IconButton>
                </Box>
                <List sx={{ p: 2 }}>
                    <ListItem disablePadding sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <Stack direction='row' alignItems='center' justifyContent='center' flexWrap='wrap' gap={2}>
                            <Typography>Cambia la fecha para alterar la cuenta regresiva</Typography>
                            <MobileDateTimePicker
                                label='Seleccionar fecha'
                                value={value}
                                onChange={handleDateChange}
                                renderInput={params => <TextField size='medium' {...params} />}
                            />
                        </Stack>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}
