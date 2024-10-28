import styles from "./SearchBox.module.css";

const SearchBox = ({ value, dispatch }) => {
  const onSearch = (event) => {
    const action = {
      type: "name/setFilter",
      payload: event.target.value,
    };
    dispatch(action);
  };

  return (
    <div className={styles.searchBox}>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={(e) => onSearch(e)} />
    </div>
  );
};

export default SearchBox;
