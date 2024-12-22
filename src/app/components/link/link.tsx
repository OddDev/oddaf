import styles from "./link.module.css";

export default function Link({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <a href="#" className={styles.link}>{children}</a>
  );
}
