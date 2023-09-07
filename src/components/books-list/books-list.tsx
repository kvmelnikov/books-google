import { useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import Style  from "./books-list.module.css"
import { Book } from "../book/book"
import Button from 'react-bootstrap/Button';
import { Loader } from "../loader/loader";
import { getBooks } from "../../services/api-book/api-book-thunks";
import { NotFound } from "../error-found/not-found";

export const BooksList = () =>{
    const dispatch = useAppDispatch()
    const {books, page, checkAvialableBook} = useAppSelector((state)=> state.books)
    const totalItems = useAppSelector((state)=> state.books.totalItems)
    const {requestBooks, failedBooks, successBooks} = useAppSelector((state)=> state.bookApi)
    

    const onPaginated = () =>{
        dispatch(getBooks(page))
    }

    const button = useMemo(()=>{
            if(requestBooks) {
               return  <Button disabled  type="button" onClick={onPaginated} className={Style.button__load}><Loader/></Button>
            } else if (!checkAvialableBook) {
               return  <Button disabled  type="button" onClick={onPaginated} className={Style.button__load}>Not book more</Button>
            } else {
               return  <Button type="button" onClick={onPaginated} className={Style.button__load}>Load more</Button>
            }
    },[requestBooks,checkAvialableBook ] )

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
                        {button}
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