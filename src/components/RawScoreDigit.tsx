import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function RawScoreDigit() {
  const [selectedItem, setSelectedItem] = useState<string>("0");

  const handleSelect = (eventKey: string | null) => {
    if (eventKey) setSelectedItem(eventKey);
  };

  return (
    <>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
          title={selectedItem}
        >
          {selectedItem}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Array.from({ length: 10 }).map((_, i) => (
            <Dropdown.Item
              eventKey={String(i)}
              key={i}
              active={selectedItem === String(i)}
            >
              {i}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default RawScoreDigit;
