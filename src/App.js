import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import BarChartComponent from "./BarChartComponent";
import Dashboard from "./Dashboard";
import SalesTable from "./SalesTable";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <Navbar />
      {/* <BarChartComponent /> */}

      {/* <div className="">
        <Dashboard />
      </div> */}
      {/* <SalesTable /> */}

      <div className="flex">
        <div className="basis-[20%] h-[100vh] border">
          <Sidebar />
        </div>
        <div className="basis-[80%] border">d</div>
      </div>
    </>
  );
}

export default App;
