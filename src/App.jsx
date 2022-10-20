
import PolicyComponent from "./components/PolicyComponent";

function App() {
  return (
    <>
      <div className="p-20">
        <header>
          <h1 className="flex justify-center font-bold text-xl mb-3">Fusion Privacy Policy</h1>
          <p className="flex justify-center mb-8">Effective as of May 2022</p>
        </header>
        <PolicyComponent />
      </div>
    </>
  );
}

export default App;
