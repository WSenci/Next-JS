import Link from "next/link";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <Link href="/posts">Ir para Posts</Link>
    </main>
  );
}
