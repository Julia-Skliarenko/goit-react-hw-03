import css from "../SearchBox/SearchBox.module.css"

export default function SearchBox({value, onFilter}) {
    return (
        <div className={css.searchBox}>
    <label className={css.searchTitle} htmlFor="search-field">
        Find contacts by name
    </label>
    <input
        className={css.searchInput}
        type="text"
        id="search-field"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
    />
    </div>
    )
}