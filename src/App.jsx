import { useEffect } from 'react'
import { END_OF_WORK_DATE } from './assets/constants/date'
import useBackCount from './hooks/useBackCount'

export default function App() {
    const [intervaleD] = useBackCount(END_OF_WORK_DATE)

    // useEffect(() => {
    //     // eslint-disable-next-line no-undef
    //     console.log('intervaleD => ', intervaleD)
    // }, [intervaleD])

    // // eslint-disable-next-line no-undef
    // console.log('END_OF_WORK_DATE => ', END_OF_WORK_DATE)

    return (
        <div className='App'>
            <div className='stack'>
                <div className='dateData'>
                    <p>{intervaleD?.days < 10 ? '0' + intervaleD?.days : intervaleD?.days}</p>
                    <p>DÍAS</p>
                </div>
                <div className='dateData'>
                    <p>{intervaleD?.hours < 10 ? '0' + intervaleD?.hours : intervaleD?.hours}</p>
                    <p>HORAS</p>
                </div>
                <div className='dateData'>
                    <p>{intervaleD?.minutes < 10 ? '0' + intervaleD?.minutes : intervaleD?.minutes}</p>
                    <p>MIN</p>
                </div>
                <div className='dateData'>
                    <p>{intervaleD?.seconds < 10 ? '0' + intervaleD?.seconds : intervaleD?.seconds}</p>
                    <p>SEG</p>
                </div>
            </div>
        </div>
    )
}
