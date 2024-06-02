import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { pressStart } from "../layout";

function Navbar() {
  return (
    <div className={styles.nav_container}>
      <Link href="/leaderboard">
        <div className={`${styles.nav_item} ${pressStart.className}`}>
          Check Results
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
