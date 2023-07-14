import {Routes, Route} from 'react-router-dom'
import sitePath from './routesConsts'

const Routes = () => {

    return (
        <Routes>
            <Route path={sitePath.main}/>
            <Route path={sitePath.login}/>
            <Route path={sitePath.register}/>
            <Route path={sitePath.error}/>
            <Route path='*'/>
        </Routes>
    )
}