import Accordion from "react-bootstrap/Accordion";
import RawScoreTripleDigit from "./RawScoreTripleDigit";
import RawScoreDigit from "./RawScoreDigit";
//import { ArrowRight, Pencil } from "react-bootstrap-icons";

function ContestantList() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>#1 Clark Kent and Lois Lane</Accordion.Header>
          <Accordion.Body>
            <RawScoreTripleDigit />
            <div style={{ display: "flex", gap: "10px", visibility: "hidden" }}>
              <RawScoreDigit />
              <RawScoreDigit />
              <RawScoreDigit />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>#2 Bruce Wayne and Selina Kyle</Accordion.Header>
          <Accordion.Body>
            <RawScoreTripleDigit />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>#3 Oliver McQeen and Dina Lance</Accordion.Header>
          <Accordion.Body>
            <RawScoreTripleDigit />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>#4 Hal Jordan and Carol Ferris</Accordion.Header>
          <Accordion.Body>
            <RawScoreTripleDigit />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>#5 John Jones and Diana Prince</Accordion.Header>
          <Accordion.Body>
            <RawScoreTripleDigit />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>#6 Arthur Curry and Mera Curry</Accordion.Header>
          <Accordion.Body>
            <RawScoreTripleDigit />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default ContestantList;
