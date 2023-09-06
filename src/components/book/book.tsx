import { FC } from "react";
import { TMakedBook } from "../../types/types";
import Style from './book.module.css'

export const Book: FC<TMakedBook> = (props) =>{


    return  <div className={Style.card}>
                <div className={Style.card__top}>
                    <div className={Style.card__image}>
                    <img  src={props.image} alt={props.title} />
                    </div>
                </div>
                <div className={Style.card__bottom}>
                  <h3 className={Style.card__title}>{props.title}</h3>
                  <p className={Style.card__authors}>{props.authors}</p>
                  <p>{props.category}</p>
                </div>
            </div>
}