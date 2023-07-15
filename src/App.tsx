import {useContext} from 'react'
import './App.css'
import { withRouter } from './hocs/withRouter'
import Router from './routes/Routes'
import { StoreContext } from './store/store.context'

function App() {

  const {userStore} = useContext(StoreContext)
    const {login} = userStore

    const user = localStorage.getItem('user');
    if (user) {
        login()
    }

  return (
      <Router/>
  )
}

export default withRouter(App)
