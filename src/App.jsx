

import Tips from '/src/pages/Tips'
import MyReadMarkdown from '/src/components/MyReadMarkdown.jsx'
import Home from '/src/pages/Home.jsx'
import NoPage from '/src/pages/NoPage.jsx'
import RoadMap from '/src/pages/RoadMap.jsx'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Home/>} />
          <Route path="/" element={<Home />} />
          <Route path='/markdown/:type/:id' element={<MyReadMarkdown/>} />


          <Route path='/tips' element={<Tips/>} />
          <Route path='/roadmaps' element={<RoadMap/>} />
          
          <Route path='*' element={<NoPage/>} />
        </Routes>
     
      </BrowserRouter>
    
    </>
  )
}

export default App
