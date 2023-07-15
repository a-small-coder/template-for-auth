import {Routes, Route} from 'react-router-dom'
import sitePath from './routesConsts'
import { lazy } from 'react'

const MainPage = lazy(() => import('../pages/Main'))
const  LoginPage = lazy(() => import('../pages/Login'))
const RegisterPage = lazy(() => import('../pages/Register'))
const ProtectedRoute = lazy(() => import('./ProtectedRoute'))
const WithoutUserRoute = lazy(() => import('./WithoutUserRoute'))
const ErrorPage =lazy(() => import('../pages/Error'))

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