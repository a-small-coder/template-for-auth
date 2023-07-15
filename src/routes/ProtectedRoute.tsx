import {useContext} from 'react'
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react" 
import sitePath from "./routesConsts";
import { StoreContext } from "../store/store.context";

const ProtectedRoute = ({ children }: {children: JSX.Element | JSX.Element[]}) => {
    const {userStore} = useContext(StoreContext)
    if (!userStore.isAuth) {
      return <Navigate to={sitePath.login} replace />;
    }
  
    return children;
  }
export default observer(ProtectedRoute)