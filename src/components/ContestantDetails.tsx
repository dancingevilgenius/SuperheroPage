import ContestantNavBar from "./ContestantNavbar";
import ContestantRank from "./ContestantRank";
import RawScoreTripleDigit from "./RawScoreTripleDigit";

function ContestantDetails() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RawScoreTripleDigit />
      <ContestantRank />
    </div>
  );
}

export default ContestantDetails;
