import css from "../Contact/Contact.module.css"

export default function Contact({id, name, number, onDelete }) {
    return (
        <div className={css.card}>
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
            <button onClick={() => onDelete(id)} className={css.btn} >Delete</button>
    </div>
    )
}