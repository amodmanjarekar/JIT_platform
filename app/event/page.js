"use client";
import React, { useEffect, useRef, useState, useReducer } from "react";
import styles from "./event.module.css";
import { useSearchParams } from "next/navigation";

function Event() {
  const params = useSearchParams();
  const eventId = params.get("id");
  const ghostRef = useRef();
  const [cells, setCells] = useState([]);
  const [dragging, setDragging] = useState();
  const [isVertical, setIsVertical] = useState(false);
  const [dropLocation, setDropLocation] = useState({ number: -1 });
  const [usedShips, setUsedShips] = useState([]);
  const [finalText, setFinalText] = useState();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  if (eventId == "2") {
    useEffect(() => {
      var temp = [];
      for (let i = 0; i < 100; i++) {
        temp.push({ status: "E", number: i });
      }
      setCells(temp);
    }, []);

    const handleGhost = (e, cell) => {
      e.preventDefault();
      ghostRef.current.style.top = `calc(${Math.floor(
        cell.number / 10
      )} * var(--unit))`;
      ghostRef.current.style.left = `calc(${Math.floor(
        cell.number % 10
      )} * var(--unit))`;
      if (!isVertical) {
        ghostRef.current.style.width = `calc(${dragging.size} * var(--unit))`;
        ghostRef.current.style.height = `var(--unit)`;
        if (10 - Math.floor(cell.number % 10) < dragging.size) {
          ghostRef.current.style.backgroundColor = "red";
        } else {
          ghostRef.current.style.backgroundColor = "black";
        }
        for (let i = 0; i < dragging.size; i++) {
          if (cells[dropLocation.number + i]?.status !== "E")
            ghostRef.current.style.backgroundColor = "red";
        }
      } else {
        ghostRef.current.style.height = `calc(${dragging.size} * var(--unit))`;
        ghostRef.current.style.width = `var(--unit)`;
        if (10 - Math.floor(cell.number / 10) < dragging.size) {
          ghostRef.current.style.backgroundColor = "red";
        } else {
          ghostRef.current.style.backgroundColor = "black";
        }
        for (let i = 0; i < dragging.size; i++) {
          if (cells[dropLocation.number + i * 10]?.status !== "E")
            ghostRef.current.style.backgroundColor = "red";
        }
      }
      ghostRef.current.style.display = "block";
    };

    const handleShipDrop = (e, name, size) => {
      if (!isVertical) {
        if (10 - Math.floor(dropLocation.number % 10) < dragging.size) {
          return;
        }
        let temp = cells;
        for (let i = 0; i < size; i++) {
          if (temp[dropLocation.number + i]?.status !== "E") return;
        }
        for (let i = 0; i < size; i++) {
          temp[dropLocation.number + i] = {
            status: name.substring(0, 2).toUpperCase(),
            number: dropLocation.number + i,
          };
        }
        setCells(temp);
      } else {
        if (10 - Math.floor(dropLocation.number / 10) < dragging.size) {
          return;
        }
        let temp = cells;
        for (let i = 0; i < size; i++) {
          if (temp[dropLocation.number + i * 10]?.status !== "E") return;
        }
        for (let i = 0; i < size; i++) {
          temp[dropLocation.number + i * 10] = {
            status: name.substring(0, 2).toUpperCase(),
            number: dropLocation.number + i * 10,
          };
        }
      }
      usedShips.push(name);
      forceUpdate();
    };

    const getCellStyle = (status) => {
      switch (status) {
        case "CA":
          return styles.filled_cellCA;
        case "BA":
          return styles.filled_cellBA;
        case "CR":
          return styles.filled_cellCR;
        case "SU":
          return styles.filled_cellSU;
        case "DE":
          return styles.filled_cellDE;

        default:
          return "";
      }
    };

    const handleLayoutDownload = () => {
      if (usedShips.length != 5) {
        alert("Please use all ships!");
        return;
      }

      let carrierCells = [],
        battleshipCells = [],
        cruiserCells = [],
        submarineCells = [],
        destroyerCells = [];

      for (let i = 0; i < 100; i++) {
        switch (cells[i].status) {
          case "CA":
            carrierCells.push({
              x: Math.floor(i / 10) + 1,
              y: Math.floor(i % 10) + 1,
            });
            break;
          case "BA":
            battleshipCells.push({
              x: Math.floor(i / 10) + 1,
              y: Math.floor(i % 10) + 1,
            });
            break;
          case "CR":
            cruiserCells.push({
              x: Math.floor(i / 10) + 1,
              y: Math.floor(i % 10) + 1,
            });
            break;
          case "SU":
            submarineCells.push({
              x: Math.floor(i / 10) + 1,
              y: Math.floor(i % 10) + 1,
            });
            break;
          case "DE":
            destroyerCells.push({
              x: Math.floor(i / 10) + 1,
              y: Math.floor(i % 10) + 1,
            });
            break;

          default:
            break;
        }
      }

      let final_layout_one = `2: [(${destroyerCells[0].x}, ${destroyerCells[0].y}), (${destroyerCells[1].x}, ${destroyerCells[1].y})]`;
      let final_layout_two = `3: [(${submarineCells[0].x}, ${submarineCells[0].y}), (${submarineCells[1].x}, ${submarineCells[1].y}), (${submarineCells[2].x}, ${submarineCells[2].y})]`;
      let final_layout_three = `3: [(${cruiserCells[0].x}, ${cruiserCells[0].y}), (${cruiserCells[1].x}, ${cruiserCells[1].y}), (${cruiserCells[2].x}, ${cruiserCells[2].y})]`;
      let final_layout_four = `4: [(${battleshipCells[0].x}, ${battleshipCells[0].y}), (${battleshipCells[1].x}, ${battleshipCells[1].y}), (${battleshipCells[2].x}, ${battleshipCells[2].y}), (${battleshipCells[3].x}, ${battleshipCells[3].y})]`;
      let final_layout_five = `5: [(${carrierCells[0].x}, ${carrierCells[0].y}), (${carrierCells[1].x}, ${carrierCells[1].y}), (${carrierCells[2].x}, ${carrierCells[2].y}), (${carrierCells[3].x}, ${carrierCells[3].y}), (${carrierCells[4].x}, ${carrierCells[4].y})]`;

      setFinalText([
        final_layout_one,
        final_layout_two,
        final_layout_three,
        final_layout_four,
        final_layout_five,
      ]);
    };

    return (
      <>
        <h1 style={{ marginLeft: "5rem" }}>Event #{eventId}</h1>
        <p style={{ marginLeft: "5rem" }}>
          Generate the text for your ship layout here.
        </p>
        <div className={styles.grid_container}>
          <div
            className={styles.layout_grid}
            onDragLeave={(e) => {
              e.preventDefault;
              ghostRef.current.style.display = "none";
              setDropLocation({ number: -1 });
            }}
          >
            {cells.map((cell) => {
              return (
                <div
                  className={`${styles.layout_cell} ${
                    cell.status === "E" ? "" : getCellStyle(cell.status)
                  }`}
                  shiptype={cell.status}
                  id={cell.number}
                  onDragOver={(e) => {
                    e.preventDefault;
                    setDropLocation(cell);
                    handleGhost(e, cell);
                  }}
                ></div>
              );
            })}
            <div className={styles.ship_ghost} ref={ghostRef}></div>
          </div>
          <div className={styles.items_container}>
            <div className={styles.ships_container}>
              {[
                {
                  ship_name: "carrier",
                  ship_style: styles.ship_carrier,
                  ship_size: 5,
                },
                {
                  ship_name: "battleship",
                  ship_style: styles.ship_battleship,
                  ship_size: 4,
                },
                {
                  ship_name: "cruiser",
                  ship_style: styles.ship_cruiser,
                  ship_size: 3,
                },
                {
                  ship_name: "submarine",
                  ship_style: styles.ship_submarine,
                  ship_size: 3,
                },
                {
                  ship_name: "destroyer",
                  ship_style: styles.ship_destroyer,
                  ship_size: 2,
                },
              ].map((ship) => {
                if (usedShips.includes(ship.ship_name)) {
                  return (
                    <button
                      onClick={() => {
                        let temp = usedShips;
                        let temp_i = usedShips.indexOf(ship.ship_name);
                        temp.splice(temp_i, 1);
                        setUsedShips(temp);

                        let tempcells = cells;
                        for (let i = 0; i < 100; i++) {
                          if (
                            tempcells[i].status ===
                            ship.ship_name.substring(0, 2).toUpperCase()
                          )
                            tempcells[i].status = "E";
                        }
                        setCells(tempcells);
                        forceUpdate();
                      }}
                    >
                      Remove {ship.ship_name}
                    </button>
                  );
                } else {
                  return (
                    <div
                      className={`${styles.ship} ${ship.ship_style} ${
                        isVertical ? styles.ship_rotate : ""
                      }`}
                      draggable
                      onDragStart={(e) => {
                        e.preventDefault;
                        setDragging({ size: ship.ship_size });
                      }}
                      onDragEnd={(e) => {
                        e.preventDefault;
                        handleShipDrop(e, ship.ship_name, ship.ship_size);
                        ghostRef.current.style.display = "none";
                      }}
                    ></div>
                  );
                }
              })}
            </div>
            <button
              className={styles.endBtn}
              onClick={() => {
                setIsVertical(!isVertical);
              }}
            >
              Current Orientation: {isVertical ? "Vertical" : "Horizontal"}
            </button>
            <button
              className={styles.endBtn}
              onClick={() => {
                handleLayoutDownload();
              }}
            >
              Get text
            </button>
          </div>
        </div>
        {finalText ? (
          <div className={styles.finalText}>
            <h3>Generated text:</h3>
            {finalText.map((text) => {
              return <div>{text}</div>;
            })}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return (
      <>
        <h1>This event does not have an auxilliary page.</h1>{" "}
        <h2>you should not be here...</h2>
      </>
    );
  }
}

export default Event;
