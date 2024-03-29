import { Outlet } from "react-router-dom";
import Slide from "@/layouts/slide";
import Header from "@/layouts/header";
import Content from "@/layouts/content";

const BasicLayout: React.FC = () => {
  return (
    <div className="bg-primary overflow-hidden">
      <Header />
      <Slide />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
export default BasicLayout;
