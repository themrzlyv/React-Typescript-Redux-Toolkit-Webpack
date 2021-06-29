import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import NotFound from '@/pages/NotFound/NotFound';

const MainPages: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default MainPages
