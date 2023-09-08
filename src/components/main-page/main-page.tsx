import { Outlet } from 'react-router-dom'
import Style from './main-page.module.css'
import { Header } from '../header/header'

export function MainPage() {
  return (
    <>
      <Header />
      <main className={Style.container}>
        <Outlet></Outlet>
      </main>
    </>
  )
}
