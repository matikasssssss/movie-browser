import { useState, useEffect, useRef } from 'react'

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }

        if (search.length === 0) {
            setError('Search cannot be empty')
            return
        }
    
        if (search.match(/^\d+$/)) {
            setError('Search cannot be a number')
            return
        }

        if (search.length < 3) {
            setError('Search must be at least 3 characters long')
            return
        } 
        setError(null)
    }, [search])

    return { search, updateSearch, error }
}