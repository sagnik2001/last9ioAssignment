import React, { useEffect } from "react";
import RulesCard from "@molecules/RulesCard";
import classes from "../../molecules/Cards/styles.module.css";

// Assuming a basic structure for the Rule and Exporter
interface Rule {
  name?: string;
  img?: string;
  exporters: Exporter[];
}

interface Exporter {
  rules: {
    name: string;
    // Add other necessary fields
  }[];
}

interface ModalProps {
  toggleModal: () => void;
  rule: Rule;
}

function Modal({ toggleModal, rule }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);
  return (
    <div
      className="overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      aria-hidden="true"
    >
      <div className="relative mx-auto p-4 w-full max-w-[784px] overflow-hidden max-h-[484px]">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center self-stretch border-b-[1px] border-b-solid border-b-colors_slate_200 p-4 px-6">
            <div className="flex gap-2 flex-[1_0_0] items-center">
              <img
                src={rule.img || "/icon1.svg"}
                alt="Icon"
                className="w-5 h-5"
              />
              <div className="text-colors_slate_600 font-inter text-[16px] font-semibold leading-6 tracking-[-0.18px]">
                {rule.name}
              </div>
              <div className="flex py-0 px-1 items-start rounded-full bg-colors_slate_100">
                <div
                  className={`text-colors_slate_400 ${classes.card_alert} font-bold font-inter text-[10px] leading-[16px] overflow-hidden`}
                >
                  {rule.exporters[0].rules.length} RULES
                </div>
              </div>
            </div>
            <img
              src="/close.svg"
              alt="Close"
              className="cursor-pointer"
              onClick={toggleModal}
            />
          </div>
          <div className="flex p-6 overflow-x-hidden overflow-y-auto h-[300px] flex-col items-start flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-start gap-6 self-stretch">
              {rule.exporters[0].rules.map((res, index) => (
                <RulesCard key={index} res={res} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
