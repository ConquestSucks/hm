import { useState, useEffect } from 'react'
import Loading from './Loading'

interface AppLoaderProps {
    children: React.ReactNode
}

const AppLoader = ({ children }: AppLoaderProps) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Показываем Loading на 2.5 секунды для красоты
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return <>{children}</>
}

export default AppLoader 