import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import Style from './book-detail.module.css'
import { Loader } from '../loader/loader'
import { getDetailBook } from '../../services/api-book/api-book-thunks'
import { ErrorFound } from '../error-found/error-foud'

export const BookDetail = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { image, title, category, authors, description } = useAppSelector((state) => state.books.bookDetail)
  const { requestDetailBook, failedDetailBook, successDetailBook } = useAppSelector((state) => state.bookApi)

  useEffect(() => {
    dispatch(getDetailBook(location.state.link))
  }, [location])

  const content = useMemo(() => {
    if (requestDetailBook) {
      return <Loader />
    } else if (successDetailBook) {
      return (
        <div className={Style.container}>
          <div className={Style.image}>
            <img src={image} alt={title} />
          </div>
          <div className={Style.detail__info}>
            <div className={Style.category}>
              <p>Category:</p>
              <p>{category ? category : 'Not category'}</p>
            </div>
            <div className={Style.title}>
              <p>Title:</p>
              <p>{title ? title : 'Not title'}</p>
            </div>
            <div className={Style.authors}>
              <p>Authors:</p>
              <p>{authors ? authors : 'Not authors'}</p>
            </div>
            <div className={Style.description}>
              <p>Description:</p>
              <p>{description ? description : 'Not Description'}</p>
            </div>
          </div>
        </div>
      )
    } else if (failedDetailBook) {
      return <ErrorFound />
    } else {
      return <div></div>
    }
  }, [title, category, image])

  return content
}
