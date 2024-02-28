
import Footer from '/src/components/Footer.jsx'
import Header from '/src/components/Header.jsx'
import {tipItems} from '/src/items/tip-items.jsx'
import ArticleItems from '/src/components/ShowArticleItems.jsx'
import '/src/css/article-items.css'
import '/src/css/MultiFilter.css'
function Tips() {

  return (
    <>
      <Header/>
      <div className="wrapper">
        <div className="items-container">
                {tipItems.map((item, index) => (
                     <ArticleItems key={'article-item-' + index}
                                   Name = {item.Name}
                                      tag = {item.tag}
                                        intro = {item.intro}
                                        MdPlace = {item.MdPlace}
                                        date = {item.date}
                      />
                    ))}
        </div>
      </div>
    

      <Footer/>
    </>
  )
}

export default  Tips
