import React, { useState, useEffect } from "react";
const initMatrix = [];
function Matrix() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("o");
  const [selR, setSelR] = useState(null);
  const [selC, setSelC] = useState(null);
  const [winner, setWinner] = useState(false);
  useEffect(() => {
    setWinner(false);
    setSelR(null);
    setSelC(null);
    const row = new Array(matrixSize).fill(null);
    const tempMatrix = [];
    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
    setMatrix(tempMatrix);
  }, []);
  function squreClick(r, c) {
    setSelC(c);
    setSelR(r);
    if (!matrix[r][c] && !winner) {
      let nextPlayer = currentPlayer === "x" ? "o" : "x";
      setCurrentPlayer(nextPlayer);
      const matrixCopy = [...matrix];
      matrixCopy[r][c] = nextPlayer;
      setMatrix(matrixCopy);
    }
  }
  function isWinner() {
    let vertical = true;
    let horizontal = true;
    let d1 = true;
    let d2 = true;
    if (selC === null || selR === null) {
      return;
    }

    for (let i = 0; i < matrixSize; i++) {
      if (matrix[i][selC] !== currentPlayer) {
        vertical = false;
      }
      if (matrix[i][selR] !== currentPlayer) {
        horizontal = false;
      }
      if (matrix[i][i] !== currentPlayer) {
        d1 = false;
      }
      if (matrix[i][matrixSize - i - 1] !== currentPlayer) {
        d2 = false;
      }
    }
    if (vertical || horizontal || d1 || d2) {
      setWinner(true);
    }
  }
  useEffect(() => {
    if (!winner) {
      isWinner();
    }
  });
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          fontSize: 20,
          color: "#000",
          textAlign: "center",
        }}
      >
        {matrix.map((val, c) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              alignContent: "center",
              fontSize: "calc(10px + 2vmin)",
            }}
          >
            {val.map((val1, r) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid #eee",
                  height: "100px",
                  alignContent: "center",
                  width: "100px",
                  textAlign: "center",
                  boxSize: "border-box",
                  fontSize: "calc(10px + 2vmin)",
                }}
                onClick={() => {
                  squreClick(r, c);
                }}
              >
                {matrix[r][c]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div> {winner ? `Player ${currentPlayer} is winner` : ""}</div>
    </div>
  );
}

export default Matrix;
