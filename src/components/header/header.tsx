import { FormSearch } from "../form-search/form-search"
import Style from './header.module.css'

export const Header = () =>{
    return (
        <header className={Style.header}>
            <h1 className={Style.heading}>Search for Books</h1>
            <FormSearch/>
        </header>
    )}