import { optionsConvert } from "../../constants/const"
import { TDetailBook, TMakedBook, TResponseDetailBook, TResponseSearchBook } from "../../types/types"
import {convert} from 'html-to-text'

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
    bookDetail.authors= book.volumeInfo.authors ? convert(book.volumeInfo.authors.join(', '), optionsConvert) : ''
    bookDetail.category= book.volumeInfo.categories ? convert(book.volumeInfo.categories.join('/ '), optionsConvert) :''
    bookDetail.description = book.volumeInfo.description ?  convert(book.volumeInfo.description, optionsConvert) : ''
    bookDetail.title = book.volumeInfo.title ? convert(book.volumeInfo.title, optionsConvert) : ''
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
    modicatedBook.authors = book.volumeInfo.authors ?  convert(book.volumeInfo.authors.join(', '), optionsConvert) : ""
    modicatedBook.category = book.volumeInfo.categories ? convert(book.volumeInfo.categories[0], optionsConvert) : ""
    modicatedBook.title =  book.volumeInfo.title ? convert(book.volumeInfo.title, optionsConvert): ""
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
