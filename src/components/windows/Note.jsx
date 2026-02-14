import React,{useEffect,useState} from 'react'
import Markdown from 'react-markdown'
import MacWindow from './macWindows'
import "./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'                        
import { dark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const Note = () => {

    const [markdown, setMarkdown] = React.useState(null)
    useEffect(() => {
        fetch("/navbar-icons/note.txt").then(res => res.text()).then(text => setMarkdown(text))
    }, [])
  return (
    <MacWindow>
        <div className="note-window">
    {markdown ? (
  <SyntaxHighlighter language="javascript" style={dark}>
    {markdown}
  </SyntaxHighlighter>
) : (
  <p>Loading...</p>
)}





      </div>
    </MacWindow>
    
  )
}

export default Note
