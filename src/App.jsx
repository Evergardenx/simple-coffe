import CoffeeList from "./components/CoffeeList";
import HeaderText from "./components/HeaderText";

function App() {
  return (
    <div className="center py-30 min-h-screen w-full py-40 ">
      <div className="mx-auto w-11/12 max-w-7xl rounded-md bg-[#1B1D1F] px-8 pb-12 pt-8">
        <HeaderText />
        <CoffeeList />
      </div>
    </div>
  );
}

export default App;
