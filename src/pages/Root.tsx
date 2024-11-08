import { Outlet } from "react-router-dom";
import SessionsContextProvider from "../store/sessions-context";
import MainHeader from "../components/MainHeader";

export default function Root() {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
