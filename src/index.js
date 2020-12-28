import React from "react";
import ReactDOM from "react-dom";
import Matrix from "./component/Matrix";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Matrix />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
