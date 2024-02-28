
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'



export default function MyReadMarkdown() {
    const {type,id} = useParams()
    const [markdown, setMarkdown] = useState('')
    

    useEffect(() => {
        fetch(`/markdown/${type}/${id}.md`)
        .then((res) => res.text())
        .then((text) => setMarkdown(text))
    }, [id, type])
    
    
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