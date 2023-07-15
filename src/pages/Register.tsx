import {useContext} from 'react'
import { Link } from "react-router-dom"
import { observer } from "mobx-react" 
import sitePath from "../routes/routesConsts"
import { StoreContext } from "../store/store.context"

const RegisterPage = () => {

    const {userStore} = useContext(StoreContext)
    const {login} = userStore

    const registerHandler = () => {
            login()
            console.log('register')    }

    return (
        <>
            <h2>register page</h2>
            <button
                onClick={registerHandler}
            >register</button>
            <Link to={sitePath.login}>to login</Link>
        </>
    )
}

export default observer(RegisterPage)