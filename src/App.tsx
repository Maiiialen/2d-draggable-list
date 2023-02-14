import * as React from "react";
import "./styles.css";
import Blocks from "./blocks";

export default function App() {
  const [totalBlocks, setTotalBlocks] = React.useState(22);
  const [rowSize, setRowSize] = React.useState(3);
  const [multiWidth, setMultiWidth] = React.useState(false);
  return (
    <div className="App">
      <div>
        <label>Row size: </label>
        <input
          value={rowSize}
          type="number"
          onChange={(e) => setRowSize(parseInt(e.target.value, 10))}
        />
        <label>Number of Block : </label>
        <input
          value={totalBlocks}
          type="number"
          onChange={(e) => setTotalBlocks(parseInt(e.target.value, 10))}
        />
        <label>Multi width: </label>
        <input
          value={rowSize}
          type="checkbox"
          checked={multiWidth}
          onChange={() => setMultiWidth((x) => !x)}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        Note: Multi width dragging is not stable
      </div>
      <Blocks
        key={`${rowSize}-${multiWidth}-${totalBlocks}`}
        rowSize={rowSize}
        multiWidth={multiWidth}
        totalBlocks={totalBlocks}
      />
    </div>
  );
}
