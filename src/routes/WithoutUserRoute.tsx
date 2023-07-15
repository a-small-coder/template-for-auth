import {useContext} from 'react'
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react" 
import { StoreContext } from "../store/store.context";
import sitePath from "./routesConsts";

const WithoutUserRoute = ({ children }: {children: JSX.Element | JSX.Element[]}) => {
  const {userStore} = useContext(StoreContext)
  if (userStore.isAuth) {
      return <Navigate to={sitePath.main} replace />;
    }
  
    return children;
  }
export default observer(WithoutUserRoute)