import { useCallback, useState } from 'react'

export default function useBoolean(initial = false) {
    const [value, setValue] = useState(initial)

    const makeFalse = useCallback(() => setValue(false), [])

    const makeTrue = useCallback(() => setValue(true), [])

    const toggle = useCallback(() => setValue(curr => !curr), [])

    const reset = useCallback(() => setValue(initial), [initial])

    return [value, makeFalse, makeTrue, toggle, reset]
}
