import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMessage } from './Global/Hello.slice'
import MainPages from '@/pages/MainPages'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMessage("Lorem ipsum dolor sit amet consectetur"))
    }, [dispatch])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <MainPages />
                </div>
            </div>
        </div>
    )
}

export default App
