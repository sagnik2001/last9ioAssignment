import classes from "./styles.module.css";

const Card = ({ service, toggleModal }) => {
  return (
    <div className="flex w-[309px] max-md:w-full p-6 flex-col  items-start gap-4 rounded border border-colors_slate_100 bg-white">
      <div className="flex items-center gap-2 self-stretch">
        <img
          src={service?.img ? service?.img : `/icon1.svg`}
          alt="icon"
          className="w-6 h=6 flex justify-center items-center"
        />
        <div className="text-colors_slate_600 flex-[1_0_0] font-inter text-[14px] font-bold leading-5">
          {service.name}
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <div className="flex items-start gap-1 self-stretch">
          <div className="flex py-0 px-1 items-start rounded-full bg-colors_slate_100">
            <div
              className={`text-colors_slate_400 ${classes.card_alert} font-bold font-inter text-[10px] leading-[16px] overflow-hidden`}
            >
              {service.exporters[0].rules?.length} RULES
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden ${classes.card_content} text-colors_slate_400 font-medium font-inter text-[12px] leading-[16px] text-ellipsis`}
        >
          {service?.exporters[0]?.rules &&
            service?.exporters[0]?.rules?.map((res, index) => <>{res.name},</>)}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleModal(service);
        }}
        className="flex justify-center border-[1px] border-solid border-colors_slate_200 rounded bg-white items-center gap-[10px] self-stretch p-2 px-1"
      >
        <span className="text-colors_slate_600 font-inter text-[12px] font-semibold leading-4 tracking-[0.01]">
          View Alert Rules
        </span>
      </button>
    </div>
  );
};

export default Card;
