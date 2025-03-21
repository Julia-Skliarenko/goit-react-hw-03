import css from "../Contact/Contact.module.css"

export default function Contact({ data: { id, name, number }, onDelete }) {
return (
    <li className={css.card}>
    <div>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
    </div>
    <button onClick={() => onDelete(id)} className={css.btn}>
        Delete
    </button>
    </li>
);
}