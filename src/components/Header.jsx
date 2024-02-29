

import { Link } from 'react-router-dom';
//tạo 1 header gồm 
import ukyo from '/public/ukyo-img.png';
export default function Header() {
    return (
        <>
         <div className ='header-container'>
            <nav>
                <ul className = 'navbar'>
                    <li> <Link to = '/index' >Home </Link> </li>
                   
                    <li> <Link to = '/roadmaps' > Roadmaps </Link></li>
                    <li><Link to = '/tips' >Tips </Link></li>
                </ul>
            </nav>
            <img src = {ukyo} alt = 'ukyo' />
        </div>
        </>
       
    )
}