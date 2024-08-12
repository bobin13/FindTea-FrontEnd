import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPanel from "./components/HomePage/SearchPanel";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <hr />
      <SearchPanel></SearchPanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
