import React from 'react'
import { useSelector } from 'react-redux'
import { getUserData, getUserSelector } from '../../Global/Hello.slice'
import { useAppDispatch, useAppSelector } from '../../Global/hooks.store'
import { RootState } from '../../Global/Store'

const Home:React.FC = () => {
    const dispatch = useAppDispatch()
    const {message} = useAppSelector((state:RootState) => state.hello)
    const users = useAppSelector(getUserSelector)
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 my-3 d-flex flex-column align-items-center">
                    <h4 className="text-center mb-3">React, Typescript, Redux Toolkit</h4>
                    <a href="https://github.com/themrzlyv/React-Typescript-Redux-Toolkit-Webpack.git" target="_blank" className="btn btn-primary">Read More</a>
                    <p className="my-2 text-dark">{message}</p>
                    <button 
                    onClick={() => dispatch(getUserData())}
                    className="btn btn-dark">
                        Create Async Funk
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 my-3 d-flex flex-column align-items-center">
                    {
                        users.length > 0 ? 
                        users.map(user => <li key={user.id}>{user.name}</li>)
                        :
                        <li>Click button and load data.</li>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
