import Click from "./Components/Click"
import Counter from "./Components/Counter"
import Header from "./Components/Header"

function App() {
  return (
    <div className="container">
      <Header title="Bakayarou" />
      <h1>Hello World</h1>
      <Click />
      <Counter />
    </div>
  );
}

export default App;
