

import '/src/css/article-items.css'
import { Link } from 'react-router-dom'
export default function ShowArticleItems(item) {
   
    return (
       <>
            <article className="article-item">
                <Link to={`${item.MdPlace}`}> <h1 className = 'Name'> {item.Name} </h1></Link>
                <div className="item date">{item.date}</div>
                <div className="item tags">
                    {item.tag.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <p> {item.intro} </p> 
                <Link to={`${item.MdPlace}`} className= 'read-more'>Read more</Link>
            </article>
       </>

    )
}