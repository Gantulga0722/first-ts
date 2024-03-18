import { SideBar } from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <SideBar />
        <main className="mx-auto">{children}</main>
      </div>
    </>
  );
};
export default Layout;
