export const setLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const removeLocalStorage = (key:string) => {
    localStorage.removeItem(key)
}