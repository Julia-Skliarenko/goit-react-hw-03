import Contact from "../Contact/Contact"
import css from "../ContactList/ContactList.module.css"

export default function ContactList({ contactLists, onDelete }) {
return (
    <ul className={css.list}>
    {contactLists.map((contact) => (
        <div key={contact.id} className={css.item}>
        <Contact data={contact} onDelete={onDelete} />
        </div>
    ))}
    </ul>
);
}