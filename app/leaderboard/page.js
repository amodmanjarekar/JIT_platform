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
              <td>MAYUR VAIDYA</td>
              <td>3873 👑</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Saeel Gote</td>
              <td>2819</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Pratik Kukde</td>
              <td>2045</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Aditya Battin</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Swapnadip Repal</td>
              <td>1864</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Amod Manjarekar</td>
              <td>1863</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Shreyash Patil</td>
              <td>1847</td>
            </tr>
            <tr>
              <td>8</td>
              <td>ARHANT</td>
              <td>1837</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Tusqasi Harisora</td>
              <td>-1171</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
