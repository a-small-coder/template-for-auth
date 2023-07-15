import { makeAutoObservable } from "mobx"
import {removeLocalStorage, setLocalStorage} from './utils/LocalStorage'

export class UserStore {
    isAuthenticated = false

    constructor() {
        makeAutoObservable(this)
    }

    get isAuth() {
        return this.isAuthenticated
    }

    login = () => {
        this.isAuthenticated = true
        setLocalStorage('user', 'true')
    }

    logout = () => {
        this.isAuthenticated = false
        removeLocalStorage('user')
    }
}