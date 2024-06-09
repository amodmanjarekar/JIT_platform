import Link from "next/link";
import styles from "./home.module.css";
import { pressStart } from "./layout";

export default function Home() {
  return (
    <>
      <div className={styles.hero_container}>
        <h1 className={pressStart.className}>Welcome to the JIT Website!</h1>
      </div>
      {/* <div className={styles.past_container}>
        <h1 className={pressStart.className}>Past Contests</h1>
        <div className={styles.past_list}>
          <div>
            <div className={styles.past_itemcard}>
              <h2>Week 1</h2>
              <div className={styles.past_itemlinks}>
                <a>Github</a>
                <Link href="/standings?">Standings</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
