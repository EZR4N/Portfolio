'use client'

import React, {createContext, useState, ReactNode} from 'react'

interface LanguagesContextType {
    english: boolean
    changetoSpanish: () => void
    changetoEnglish: () => void
}

interface LanguageProviderProps {
    children: ReactNode
}

export const LanguagesContext = createContext<LanguagesContextType | undefined>(undefined)


export const LanguagesProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [ english, setEnglish ] = useState(true)

    const changetoSpanish = () => {
        setEnglish(false)
    }

    const changetoEnglish = () => {
        setEnglish(true)
    }

    return (
        <LanguagesContext.Provider value={{english, changetoSpanish, changetoEnglish}}>
            { children }
        </LanguagesContext.Provider>
    )
    }