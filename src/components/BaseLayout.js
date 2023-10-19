import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout_content">{children}</main>;
    </div>
  );
};

export default BaseLayout;
