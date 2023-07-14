import './App.css'
import { withRouter } from './hocs/withRouter'
import MainPage from './pages/Main'

function App() {

  return (
    <MainPage/>
  )
}

export default withRouter(App)
