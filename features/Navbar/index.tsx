const Navbar = () => {
  return (
    <div className="flex justify-center max-lg:px-4 items-center self-stretch">
      <div className="bg-last_white flex max-w-[960px] justify-between items-end flex-[1_0_0]">
        <img src="/logo.svg" alt="Logo-Icon" />
        <div className="flex justify-end items-center gap-4">
          <div className="flex justify-end items-center gap-1 p-2 px-0">
            <div className="flex justify-end items-center p-[1.667px]">
              <img src="/githubIcon.svg" alt="Github-Icon" />
            </div>
            <div className="font-inter text-sm leading-4 font-medium">
              125 stars
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
