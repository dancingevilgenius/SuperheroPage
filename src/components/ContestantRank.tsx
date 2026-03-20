import { Button } from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

function ContestantRank() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "end",
        verticalAlign: "top",
        gap: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <h4 style={{ display: "flex", padding: "10px", fontSize: "18px" }}>
        Rank: 5
      </h4>
      <div style={{ display: "flex", padding: "10px", gap: "5px" }}>
        <Button>
          <ArrowUp></ArrowUp>
        </Button>
        <div style={{ width: "20px" }} />
        <Button>
          <ArrowDown></ArrowDown>
        </Button>
      </div>
    </div>
  );
}

export default ContestantRank;
