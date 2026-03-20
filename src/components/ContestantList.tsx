import Accordion from "react-bootstrap/Accordion";
import RawScoreTripleDigit from "./RawScoreTripleDigit";
import RawScoreDigit from "./RawScoreDigit";
import ContestantDetails from "./ContestantDetails";
//import { ArrowRight, Pencil } from "react-bootstrap-icons";

function ContestantList() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>#101 Clark Kent and Lois Lane</Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>#102 Bruce Wayne and Selina Kyle</Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>#103 Oliver McQeen and Dina Lance</Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>#104 Hal Jordan and Carol Ferris</Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>#105 John Jones and Diana Prince</Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>#106 Arthur Curry and Mera Curry</Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default ContestantList;
