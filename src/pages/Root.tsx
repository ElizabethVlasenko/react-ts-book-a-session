import { Outlet } from "react-router-dom";
import SessionsContextProvider from "../store/sessions-context";

export default function Root() {
  return (
    <SessionsContextProvider>
      {/* Todo: Add Header */}
      <Outlet />
    </SessionsContextProvider>
  );
}
