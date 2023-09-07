import { useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import { getDetailBook } from "../../services/form-search/form-search-thunk"

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

    console.log(image)

    const content = useMemo(()=>{
        if(title && category && image) {
            return <div>
                        <img src={image} alt={title} />
                        </div>
        }
        else {
            return <div>ХУЙ</div>
        }
        
    },[title, category,image])
    return content
}