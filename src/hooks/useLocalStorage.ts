import { useEffect, useState } from "react"


export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        let item = localStorage.getItem(key)
        if (item !== null) {
            try{
            return JSON.parse(item)
            }catch{
                 return initialValue
            }
            
        }
    })
    useEffect(() => {

        localStorage.setItem(key , JSON.stringify(value))

    }, [key, value])

    return [value , setValue] as [typeof value ,typeof setValue]
}


