import Bikes from "./2.2 map array to li";
import Alert from "./4.2 conditional rendering";
import "./App.css";

export default function App() {
  return (
    <main className="container">
      <Bikes />
      <h1>Exercise 4.2</h1>
      <Alert color={"green"} text="Success" />
      <Alert color={"red"} text="Danger" />
      <Alert color={"orange"} text="Warning" />
    </main>
  );
}
