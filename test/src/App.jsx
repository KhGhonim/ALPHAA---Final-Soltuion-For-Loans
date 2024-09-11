import FixedHeader from "../src/Components/FixedHeader/FixedHeader";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import QuickContact from "../src/Components/Quick Contact/QuickContact";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <FixedHeader />
      <Header />
      <Outlet />
  
      <QuickContact />
      <Footer />
    </>
  );
}

export default App;
