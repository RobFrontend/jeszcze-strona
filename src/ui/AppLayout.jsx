import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Headroom from "react-headroom";
import CookiesAlert from "./CookiesAlert";

const Main = styled.main`
  overflow: hidden;
`;

function AppLayout() {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Main>
        <Outlet />
        <CookiesAlert />
      </Main>
      <Footer />
    </>
  );
}

export default AppLayout;
