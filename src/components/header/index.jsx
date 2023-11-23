import { Menu } from "./menu";
import styles from "./header.module.css";

export const Header = ({ pageHeight }) => {
  return (
    <nav className={styles.headerMenu}>
      <Menu pageHeight={pageHeight} />
    </nav>
  );
};
