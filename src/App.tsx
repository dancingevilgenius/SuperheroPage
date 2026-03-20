import "./App.css";
import ContestantList from "./components/ContestantList";
import ContestantNavbar from "./components/ContestantNavbar";
function App() {
  return (
    <>
      <div>
        <ContestantNavbar />
      </div>
      <ContestantList />
    </>
  );
}
export default App;
