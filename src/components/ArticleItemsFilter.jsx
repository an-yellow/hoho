import { articleItems as items } from "/src/items/article-items.jsx"
import { useState, useEffect } from 'react'
import '/src/css/MultiFilter.css'
import ArticleItems from "/src/components/ShowArticleItems"

export default function ArticleItemsFilter() {

    const [selectedFilters, setSelectedFilters] = useState([])
    const [filteredItems, setFilteredItems] = useState(items)
    let filters = ['Puzzles', 'Math', 'Quan', 'Programming', 'Concepts']
    const [filterWayNow, setFilterWayNow] = useState('A and B')
    const filterWay = ['A and B', 'A or B']
    const handleFilterWayChange = (filterWay) => {
        setFilterWayNow(filterWay)
    }
    const handleFilterButtonClick = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((f) => f !== filter))
        } else {
            setSelectedFilters([...selectedFilters, filter])
        }
    }
    const filterItemsAandB = () => {
        if (selectedFilters.length > 0) {
            let tempItems = [...items]
            selectedFilters.map((selectedFilter) => {
                tempItems = tempItems.filter((item) => item.tag.includes(selectedFilter))
            });
            setFilteredItems([...tempItems])
        }
        else {
            setFilteredItems([...items])
        }
    }
    const filterItemsAorB = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedFilter) => {
                return items.filter((item) => item.tag.includes(selectedFilter))
            });
            let uni = [...new Set([].concat(...tempItems))]
            setFilteredItems(uni)
        }
        else {
            setFilteredItems([...items])
        }
    }
    useEffect(() => {
        if (filterWayNow === 'A and B') {
            filterItemsAandB()
        }
        else if (filterWayNow === 'A or B') {
            filterItemsAorB()
        }
    }, [selectedFilters, filterWayNow])
  
    return (
        <>
         <div>
    
            <div className='filter-header'>
                <h1>Filter</h1>
                <div className="filter-way">
                    {filterWay.map((filter, index) => (
                        <button 
                            key={'filter-way-' + index}
                            onClick={()=> handleFilterWayChange(filter)}
                            className={filterWayNow === filter ? 'filter active' : 'filter'}
                        >
                        {filter}
                        </button>
                    ))}
                </div>
            </div>
            <div className = 'button-container'>
                    {filters.map((filter, index) => (
                        <button 
                            key={'button-' + index}
                            onClick={()=> handleFilterButtonClick(filter)}
                            className={selectedFilters?.includes(filter) ? 'button active' : 'button'}
                        >
                        {filter}
                        </button>

                    ))}
            </div>
            
            <div className="items-container">
                {filteredItems.map((item, index) => (
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
        </>
    )
}

