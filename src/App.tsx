import { SimpleButton } from "./lib";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <SimpleButton
        label="Test Button 🚀"
        onClick={() => alert("Working!")}
      />
    </div>
  );
}

export default App;