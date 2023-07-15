import {Routes, Route} from 'react-router-dom'
import sitePath from './routesConsts'
import ErrorPage from '../pages/Error'
import MainPage from '../pages/Main'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import ProtectedRoute from './ProtectedRoute'
import WithoutUserRoute from './WithoutUserRoute'

const Router = () => {

    return (
        <Routes>
            <Route path={sitePath.main} element={
                <ProtectedRoute>
                    <MainPage/>
                </ProtectedRoute>
            }/>
            <Route path={sitePath.login} element={
                <WithoutUserRoute>
                    <LoginPage/>
                </WithoutUserRoute>
            }/>
            <Route path={sitePath.register} element={
                <WithoutUserRoute>
                    <RegisterPage/>
                </WithoutUserRoute>

            }/>
            <Route path={sitePath.error} element={<ErrorPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
}
export default Router