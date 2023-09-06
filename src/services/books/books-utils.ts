import { TMakedBook, TResponseSearchBook } from "../../types/types"

export const makedBooks = (arr: TResponseSearchBook[]) => {
    let res: TMakedBook[] = [] 

    arr.forEach((el)=>{
        const book: TMakedBook = {
            id: "",
            image: "",
            title: "",
            category: "",
            authors: ""
        }
        book.id = el.id
        book.authors= el.volumeInfo.authors ?  el.volumeInfo.authors.join(', ') : ""
        book.category = el.volumeInfo.categories ? el.volumeInfo.categories[0] : ""
        book.image = el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : ""
        book.title = el.volumeInfo.title ? el.volumeInfo.title: ""
        res.push(book)
    })

    return res

}
