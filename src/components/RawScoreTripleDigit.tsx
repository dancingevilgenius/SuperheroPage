import RawScoreDigit from "./RawScoreDigit";

function RawScoreTripleDigit() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <h4 style={{ display: "flex", padding: "10px", fontSize: "18px" }}>
        Raw:
      </h4>
      <div style={{ display: "flex", padding: "10px", gap: "5px" }}>
        <RawScoreDigit />
        <RawScoreDigit />
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>.</span>
        <RawScoreDigit />
      </div>
    </div>
  );
}

export default RawScoreTripleDigit;
