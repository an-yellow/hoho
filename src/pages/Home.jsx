
import ArticleItemsFilter from '/src/components/ArticleItemsFilter.jsx'
import Footer from '/src/components/Footer.jsx'
import Header from '/src/components/Header.jsx'

function Home() {

  return (
    <>
      <Header/>

      <div className="wrapper">
        <ArticleItemsFilter/> 
      </div>
     

      <Footer/>
    </>
  )
}

export default Home
