
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'


function getMarkdownURL(type, id) {
    return new URL( `/markdown/${type}/${id}.md`, import.meta.url).href
}

export default function MyReadMarkdown() {
    const { type, id } = useParams()
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        fetch(getMarkdownURL(type, id))
            .then((response) => response.text())
            .then((text) => setMarkdown(text))
    }, [type, id, markdown])
    
    return (
        <>
        <Header/>
        <div className="wrapper">
            <div className="markdown">
            <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
             
        </div>
       
        <Footer/>
        </>
    )
    }   