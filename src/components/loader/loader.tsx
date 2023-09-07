import Style from './loader.module.css'

export const Loader = () =>{
    return <div className={Style.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
}