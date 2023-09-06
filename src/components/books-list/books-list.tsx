import { useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import Style  from "./books-list.module.css"
import { Book } from "../book/book"
import Button from 'react-bootstrap/Button';
import { formSearchRequest } from "../../services/form-search/form-search-thunk";

export const BooksList = () =>{
    const dispatch = useAppDispatch()
    const [page, setPage] = useState<number>(0)
    const books = useAppSelector((state)=> state.books.books)
    const {request, failed, success} = useAppSelector((state)=> state.formSearch)

    const onPaginated = () =>{
        setPage(page + 1)
        console.log(page)
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