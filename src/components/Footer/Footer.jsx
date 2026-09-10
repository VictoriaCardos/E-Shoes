import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 E-Shoes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
