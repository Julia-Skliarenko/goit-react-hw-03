import Contact from "../Contact/Contact"
import css from "../ContactList/ContactList.module.css"

export default function ContactList({ contact, onDelete }) {
    return (
        <div className={css.container}>
            <ul className={css.list}>
                {contact.map(({ id, name, number }) => (<Contact key={id} id={id} name={name} number={number} onDelete={onDelete} />)

                )}
            </ul>
        </div>
    );
}