import RawScoreDigit from "./RawScoreDigit";

function RawScoreTripleDigit() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <RawScoreDigit />
      <RawScoreDigit />
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>.</span>
      <RawScoreDigit />
    </div>
  );
}

export default RawScoreTripleDigit;
