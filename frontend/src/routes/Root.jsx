import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
