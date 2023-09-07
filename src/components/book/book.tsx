import { FC } from "react";
import { TMakedBook } from "../../types/types";
import Style from './book.module.css'
import { Link } from "react-router-dom";

export const Book: FC<TMakedBook> = (props) =>{
    return  <Link   
            to={{
      pathname: `/books/${props.id}`,
       }}
       state={{link: props.link}}
       className={Style.card__link}
      >  
      <div className={Style.card}>
                <div className={Style.card__top}>
                    <div className={Style.card__image}>
                    <img  src={props.image} alt={props.title} />
                    </div>
                </div>
                <div className={Style.card__bottom}>
                  <p className={Style.card__category}>{props.category}</p>
                  <p className={Style.card__title}>{props.title}</p>
                  <p className={Style.card__authors}>{props.authors}</p>
                </div>
            </div>
            </Link>
}