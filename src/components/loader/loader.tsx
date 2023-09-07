import Style from './loader.module.css'

export const Loader = () =>{

    return  <div className={Style.container}><span className={Style.loader}></span>
    </div>
}