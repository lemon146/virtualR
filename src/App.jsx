import Feature from "./components/Feature";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-16 ">
        <Hero />
        <Feature />
      </div>
    </>
  );
};

export default App;
