import './App.css'
import { withRouter } from './hocs/wiithRouter'
import MainPage from './pages/Main'

function App() {

  return (
    <MainPage/>
  )
}

export default withRouter(App)
