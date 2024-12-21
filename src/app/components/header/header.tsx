import Link from "../link/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <section></section>
      <Link>
        Message Me ↣
      </Link>
    </header>
  );
}
