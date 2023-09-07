import { Outlet } from "react-router-dom"
import { FormSearch } from "../form-search/form-search"
import Style from './main-page.module.css'

export function MainPage() {
    return (
        <>  
        <header className={Style.container__header}>
                <h1>Search for Books</h1>
                <FormSearch/>
        </header>
        <main className={Style.container}>
                <Outlet></Outlet>
        </main>
            
        </>

    )
}