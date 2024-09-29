const FooterComp = () => {
  return (
    <div className="flex sticky bottom-0 justify-center items-center gap-6 self-stretch py-[18px] px-[32px] border-[1px] border-solid border-colors_slate_100 bg-white">
      <div className="flex w-[960px] justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-colors_slate_400 font-inter text-[12px] font-medium leading-4">
            Contribute on GitHub
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-colors_slate_400 text-right font-inter text-[12px] font-medium leading-4">
            Maintained by Last9
          </div>
          <img src="/logo_footer.svg" alt="Logo-footer" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
