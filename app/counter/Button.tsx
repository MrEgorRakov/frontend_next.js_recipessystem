'use client'

import { useState } from "react"

export function Button() {

    let [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

    function minus() {
        setCount(count - 1)
    }

    function zero() {
        setCount(count = 0)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button
                onClick={add}
                className="bg-blue-200 p-2 border"
            > +1 </button>
            <button
                onClick={minus}
                className="bg-blue-200 p-2 border ml-30"
            > -1 </button>
            <button
                onClick={zero}
                className="bg-blue-200 p-2 border ml-60"
            > 0 </button>
        </div>

    )
}