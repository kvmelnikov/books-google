import { optionsConvert } from '../../constants/const'
import { TDetailBook, TMakedBook, TResponseDetailBook, TResponseSearchBook } from '../../types/types'
import { convert } from 'html-to-text'
import { v4 as uuidv4 } from 'uuid';

export const makeDetailBook = (book: TResponseDetailBook) => {
  const bookDetail: TDetailBook = {
    id: '',
    image: '',
    title: '',
    category: '',
    authors: '',
    description: '',
  }

  bookDetail.id = book.id
  bookDetail.authors = book.volumeInfo.authors ? convert(book.volumeInfo.authors.join(', '), optionsConvert) : ''
  bookDetail.category = book.volumeInfo.categories ? convert(book.volumeInfo.categories.join('/ '), optionsConvert) : ''
  bookDetail.description = book.volumeInfo.description ? convert(book.volumeInfo.description, optionsConvert) : ''
  bookDetail.title = book.volumeInfo.title ? convert(book.volumeInfo.title, optionsConvert) : ''
  bookDetail.image = book.volumeInfo.title ? book.volumeInfo.imageLinks.thumbnail : ''

  return bookDetail
}

export const makeBook = (book: TResponseSearchBook) => {
  let modicatedBook: TMakedBook = {
    id: '',
    uuid: '',
    image: '',
    title: '',
    category: '',
    authors: '',
    link: '',
  }

  modicatedBook.id = book.id
  modicatedBook.uuid = uuidv4()
  modicatedBook.image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
  modicatedBook.authors = book.volumeInfo.authors
    ? convert(book.volumeInfo.authors.join(', ').slice(0, 50), optionsConvert)
    : ''
  modicatedBook.category = book.volumeInfo.categories ? convert(book.volumeInfo.categories[0], optionsConvert) : ''
  modicatedBook.title = book.volumeInfo.title ? convert(book.volumeInfo.title.slice(0, 40), optionsConvert) : ''
  modicatedBook.link = book.selfLink
  return modicatedBook
}

export const makeBooks = (books: TResponseSearchBook[]) => {
  let booksModificated: TMakedBook[] = []

  books.forEach((el) => {
    booksModificated.push(makeBook(el))
  })

  return booksModificated
}
