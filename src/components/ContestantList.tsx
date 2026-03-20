import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
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
          <Accordion.Header>
            <Badge bg="secondary" style={{ marginRight: "5px" }}>
              #101
            </Badge>{" "}
            Clark Kent and Lois Lane
          </Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <Badge bg="secondary" style={{ marginRight: "5px" }}>
              #102
            </Badge>{" "}
            Bruce Wayne and Selina Kyle
          </Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <Badge bg="secondary" style={{ marginRight: "5px" }}>
              #103
            </Badge>{" "}
            Oliver McQeen and Dina Lance
          </Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <Badge bg="secondary" style={{ marginRight: "5px" }}>
              #104
            </Badge>{" "}
            Hal Jordan and Carol Ferris
          </Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <Badge bg="secondary" style={{ marginRight: "5px" }}>
              #105
            </Badge>{" "}
            John Jones and Diana Prince
          </Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <Badge bg="secondary" style={{ marginRight: "5px" }}>
              #106
            </Badge>{" "}
            Arthur Curry and Mera Curry
          </Accordion.Header>
          <Accordion.Body>
            <ContestantDetails />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default ContestantList;
