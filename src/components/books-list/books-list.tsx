import { useMemo } from "react"
import { useAppSelector } from "../../hooks/hook"
import Style  from "./books-list.module.css"
import { Book } from "../book/book"
export const BooksList = () =>{
    const books = useAppSelector((state)=> state.books.books)
    const {request, failed, success} = useAppSelector((state)=> state.formSearch)
    const content = useMemo(()=>{
        if(books) {
         
            return <section className={Style.container}>
                        {books.map((el)=>{
                           return <article key={el.id}>
                                    <Book {...el}/>
                                  </article>
                        })}
                    </section>
        }
        else{
            return <div></div>
        }

    },[books,request, failed, success])


    return content
}