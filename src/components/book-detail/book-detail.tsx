import { useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import { getDetailBook } from "../../services/form-search/form-search-thunk"
import Style from "./book-detail.module.css"

export const BookDetail = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const {image,
           title,
           category,
           authors,
           description} =  useAppSelector((state) => state.books.bookDetail)

    useEffect(()=>{
        dispatch(getDetailBook(location.state.link))
    },[location])



    const content = useMemo(()=>{
        if(image) {
            return <div className={Style.container}>
                        <div className={Style.image}><img src={image} alt={title}/></div>
                        <div className={Style.detail__info}>
                            <p>{category}</p>
                            <p>{title}</p>
                            <p>{authors}</p>
                            <p>{description}</p>
                        </div>
                    </div>
        }
        else {
            return <div>ХУЙ</div>
        }
        
    },[title, category,image])
    return content
}