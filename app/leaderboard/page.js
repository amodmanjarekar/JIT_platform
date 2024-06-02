import React from "react";
import styles from "./leaderboard.module.css";
import { pressStart } from "../layout";

function Leaderboard() {
  return (
    <div className={styles.results_container}>
      <h1 className={pressStart.className}>Leaderboard</h1>
      <div className={styles.table_container}>
        <table cellSpacing={0} cellPadding={0} className={styles.res_table}>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Points</th>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doejohndoe</td>
              <td>3030</td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doejohndoe</td>
              <td>3030</td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doejohndoe</td>
              <td>3030</td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doejohndoe</td>
              <td>3030</td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doejohndoe</td>
              <td>3030</td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doejohndoe</td>
              <td>3030</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
