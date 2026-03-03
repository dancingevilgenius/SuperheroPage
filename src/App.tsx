import ListGroup from "./components/ListGroup/ListGroup";
import UserList from "./components/UserList";

function App() {
  //return <UserList />;
  return (
    <ListGroup
      items={["Superman", "Batman", "Wonderwoman", "Green Lantern"]}
      heading={"Heroes (React/Docker/Devploy>"}
      onSelectItem={function (item: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}

export default App;
