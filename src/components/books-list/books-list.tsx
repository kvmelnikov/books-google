import { useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import Style  from "./books-list.module.css"
import { Book } from "../book/book"
import Button from 'react-bootstrap/Button';
import { formSearchRequest } from "../../services/form-search/form-search-thunk";
import { increasePage } from "../../services/books/books-slice";

export const BooksList = () =>{
    const dispatch = useAppDispatch()
    const page = useAppSelector((state)=> state.books.page)
    const books = useAppSelector((state)=> state.books.books)
    const {request, failed, success} = useAppSelector((state)=> state.formSearch)

    const onPaginated = () =>{
        dispatch(formSearchRequest(page))
    } 

    const content = useMemo(()=>{
        if(books?.length > 0) {
            return <div className={Style.container}>
                        <section className={Style.container__books}>
                        {books.map((el)=>{
                           return <article >
                                    <Book {...el}/>
                                  </article>
                        })}
                        </section>
                    <Button onClick={onPaginated} variant="secondary">Primary</Button>{' '}
                    </div>
        }
        else{
            return <div></div>
        }

    },[books,request, failed, success])


    return content
}