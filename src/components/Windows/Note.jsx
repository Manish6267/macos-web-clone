import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import "./note.scss"


const Note = ({ windowName, setWindowsState }) => {

    const [markdown, setMarkdown] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch("/note.txt")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to load note")
                }
                return res.text()
            })
            .then(text => setMarkdown(text))
            .catch(() => setError(true))
    }, [])

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="note-window">
                {error && <p>Unable to load notes right now.</p>}
                {!error && markdown && <Markdown>{markdown}</Markdown>}
                {!error && !markdown && <p>Loading...</p>}
            </div>
        </MacWindow>
    )
}

export default Note