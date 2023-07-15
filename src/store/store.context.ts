import {createContext} from 'react'
import { UserStore } from "./userStore";

interface IStoreContext {
    userStore: UserStore
}

const userStore = new UserStore()

export const StoreContext = createContext<IStoreContext>({
    userStore
})

