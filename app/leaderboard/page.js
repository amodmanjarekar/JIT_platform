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
              <td>Shreyash Patil</td>
              <td>2708 👑</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Adwait Bokade</td>
              <td>2692</td>
            </tr>
            <tr>
              <td>3</td>
              <td>ARHANT</td>
              <td>2687</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Swapnadip Repal</td>
              <td>2519</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Tusqasi Harisora</td>
              <td>2518</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Pratik Kukde</td>
              <td>2507</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Aditya Battin</td>
              <td>2145</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Saeel Gote</td>
              <td>1703</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Amod Manjarekar</td>
              <td>1117</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Abhijeet Sangekar</td>
              <td>526</td>
            </tr>
            <tr>
              <td>11</td>
              <td>MAYUR VAIDYA</td>
              <td>487</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
