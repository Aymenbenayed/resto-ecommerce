import React ,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
//import ScrollToTop from "react-scroll-to-top";
import './CategoriesList.css'
import Categorie from './Categorie'
import { getCategories } from '../../JS/actions/category'

const CategoriesList = () => {

    const loading = useSelector(state => state.categoryReducer.loading)
    const categories=useSelector(state=> state.categoryReducer.categories)
    const dispatch=useDispatch()
        useEffect(() => {
        dispatch(getCategories())
        },[dispatch])
        
    return ( 
    <div> 
        {/* <ScrollToTop smooth /> */}
        {loading ? <h1>stana chwy </h1>:
            <div className="category-list">
                    {categories
                    .map(category => 
                    <Categorie key={category.id} category={category} />)}
            </div>}
    </div>
    )
}

export default CategoriesList
