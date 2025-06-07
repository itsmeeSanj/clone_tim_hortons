import { Outlet } from "react-router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PublicLayout() {
  return (
    <>
      <Header />
      {/*  */}
      <main>
        <Outlet />
      </main>
      {/*  */}
      <Footer />
    </>
  );
}

export default PublicLayout;
