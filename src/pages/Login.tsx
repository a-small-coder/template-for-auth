import {useContext} from 'react'
import { Link } from "react-router-dom"
import { observer } from "mobx-react" 
import sitePath from "../routes/routesConsts"
import { StoreContext } from "../store/store.context"

const LoginPage = () => {

    const {userStore} = useContext(StoreContext)
    const {login} = userStore

    const loginHandler = () => {
        login()
        console.log('login')
    }

    return (
        <>
            <h2>login page</h2>
            <button
                onClick={loginHandler}
            >login</button>
            <Link to={sitePath.register}>to register</Link>
        </>
    )
}

export default observer(LoginPage)