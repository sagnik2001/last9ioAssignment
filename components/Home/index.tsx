import Content from "@features/Content";
import FooterComp from "@features/Footer";
import Navbar from "@features/Navbar";

const HomeComp = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center self-stretch border-b-[1px] border-solid border-colors_slate_200 bg-colors_base_white" />
      <Content />
      <FooterComp />
    </>
  );
};

export default HomeComp;
