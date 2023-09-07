import { TDetailBook, TMakedBook, TResponseDetailBook, TResponseSearchBook } from "../../types/types"

export const makeDetailBook = (book:TResponseDetailBook ) => {
    const bookDetail: TDetailBook = {
        id: "",
        image: "",
        title: "",
        category: "",
        authors: "",
        description: ""
    }
    bookDetail.id = book.id
    bookDetail.authors= book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : ''
    bookDetail.category= book.volumeInfo.categories ? book.volumeInfo.categories.join('/ ') :''
    bookDetail.description = book.volumeInfo.description ?  book.volumeInfo.description : ''
    bookDetail.title = book.volumeInfo.title ? book.volumeInfo.title : ''
    bookDetail.image = book.volumeInfo.title ? book.volumeInfo.imageLinks.thumbnail : ''

    return bookDetail
}


export const makeBook = (book:TResponseSearchBook) => {
    let modicatedBook: TMakedBook = {  
    id: "",
    image: "",
    title: "",
    category: "",
    authors: "",
    link:""}

    modicatedBook.id = book.id
    modicatedBook.image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
    modicatedBook.authors = book.volumeInfo.authors ?  book.volumeInfo.authors.join(', ') : ""
    modicatedBook.category = book.volumeInfo.categories ? book.volumeInfo.categories[0] : ""
    modicatedBook.title =  book.volumeInfo.title ? book.volumeInfo.title: ""
    modicatedBook.link = book.selfLink
    return modicatedBook
}


export const makedBooks = (books: TResponseSearchBook[]) => {
    let booksModificated: TMakedBook[] = [] 

    books.forEach((el)=>{
        const book: TMakedBook = {
            id: "",
            image: "",
            title: "",
            category: "",
            authors: "",
            link:""
        }
        booksModificated.push(makeBook(el))
    })

    return booksModificated
}
