import {useContext} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { StoreContext } from '../store/store.context'

function MainPage() {

  const {userStore} = useContext(StoreContext)
    const {logout} = userStore


  const loguthandler = () => {
    logout()
    console.log('logout')
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
         main
        </p>

        <button
          onClick={loguthandler}
        >
          logout
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default MainPage
