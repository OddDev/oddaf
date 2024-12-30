import Link from "../link/link";
import styles from "./header.module.css";
import Logo from "../logo/logo";
import OddRadioGroup from "../radiogroup/radio-group";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
        OddDev
      </div>
      <section className={styles.banner}>
        <OddRadioGroup />
     </section>
      <Link>
        Message Me ↣
      </Link>
    </header>
  );
}
