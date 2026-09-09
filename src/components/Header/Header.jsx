import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <p>E-Shoes</p>
        <input
          type="search"
          placeholder="Buscar tênis..."
          className={styles.searchInput}
        />
        <button className={styles.accountButton}>Minha Conta</button>
        <button className={styles.cartButton}>Carrinho</button>
      </div>
      <nav className={styles.categoryRow}>
        <button className={styles.filterButton}>Masculino</button>
        <button className={styles.filterButton}>Feminino</button>
        <button className={styles.filterButton}>Footwear</button>
        <button className={styles.filterButton}>Casual</button>
        <button className={styles.filterButton}>Todos</button>
      </nav>
    </header>
  );
};

export default Header;
