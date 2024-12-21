import styles from "./link.module.css";

export default function Link({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <a className={styles.link}>{children}</a>
  );
}
