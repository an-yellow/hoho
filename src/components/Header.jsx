

//tạo 1 header gồm 

export default function Header() {
    return (
        <>
         <div className ='header-container'>
            <nav>
                <ul className = 'navbar'>
                    <li> <a href = "/index"> Home </a> </li>
                   
                    <li> <a href = "/roadmaps/"> Roadmaps </a></li>
                    <li> <a href = "/tips/"> Tips </a></li>
                </ul>
            </nav>
            <img src = '/public/ukyo-img.png' alt = 'ukyo' />
        </div>
        </>
       
    )
}