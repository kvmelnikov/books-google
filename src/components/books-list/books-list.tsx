import { useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import Style  from "./books-list.module.css"
import { Book } from "../book/book"
import Button from 'react-bootstrap/Button';
import { increasePage } from "../../services/books/books-slice";
import { Loader } from "../loader/loader";
import { getBooks } from "../../services/api-book/api-book-thunks";
import { NotFound } from "../error/not-found";

export const BooksList = () =>{
    const dispatch = useAppDispatch()
    const page = useAppSelector((state)=> state.books.page)
    const books = useAppSelector((state)=> state.books.books)
    const totalItems = useAppSelector((state)=> state.books.totalItems)
    const {requestBooks, failedBooks, successBooks} = useAppSelector((state)=> state.bookApi)

    const onPaginated = () =>{
        dispatch(getBooks(page))
    }

    const content = useMemo(()=>{
        if(books?.length > 0 && successBooks) {
            return <>
                        <p className={Style.totalItems}>Found {totalItems} results </p>
                        <section className={Style.container__books}>
                        {books.map((el)=>{
                           return <article >
                                    <Book {...el}/>
                                  </article>
                        })}
                        </section>
                        {requestBooks ? <Button disabled  type="button" onClick={onPaginated} className={Style.button__load}><Loader/></Button> : <Button type="button" onClick={onPaginated} className={Style.button__load}>Load more</Button>  }    
                    </>
        }   
        else if(requestBooks){
            return <Loader/>
        } else if(books?.length === 0 && successBooks) {
            return <NotFound/>
        } else {
            return <div></div>
        }

    },[books,requestBooks, failedBooks, successBooks])


    return content
}