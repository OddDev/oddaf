import Link from "../link/link";
import styles from "./header.module.css";
import Logo from "../logo/logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
        OddDev
      </div>
      <section className={styles.banner}>
        <h1>Foobar</h1>
      </section>
      <Link>
        Message Me ↣
      </Link>
    </header>
  );
}
