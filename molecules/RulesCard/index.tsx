import React, { useState } from "react";

const RulesCard = ({ res, index }) => {
  const [copyText, setCopyText] = useState("Copy");

  const handleCopyToClipboard = () => {
    let entries = Object.entries(res)
      .map(([key, value]) => {
        if (key === "name") key = "alert";
        if (key === "query") key = "expr";
        return `${key}: ${value}`;
      })
      .join("\n");

    if (!res.hasOwnProperty("for")) {
      entries += "for: 0m";
    }

    navigator.clipboard
      .writeText(entries)
      .then(() => {
        setCopyText("Copied");
        setTimeout(() => setCopyText("Copy"), 3000);
      })
      .catch((err) => console.error("Failed to copy text to clipboard", err));
  };

  return (
    <div className="flex items-start overflow-x-auto gap-4 self-stretch">
      <div className="flex w-10 h-10 flex-col justify-center items-center rounded-full bg-colors_slate_100">
        <div className="text-colors_slate_500 text-[12px] font-bold leading-4 font-inter">
          {index + 1}
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
        <div className="flex flex-col items-start gap-1">
          <div className="text-colors_slate_600 font-inter text-[14px] font-medium leading-5">
            {res.name}
          </div>
          <div className="text-colors_slate_500 font-inter text-[12px] font-medium leading-4">
            {res.description}
          </div>
        </div>
        <div className="flex py-6 relative px-2 items-center gap-4 self-stretch rounded bg-colors_slate_50">
          <div className="text-[#24292E] flex gap-1 items-start jetbrains-mono-test font-jetBrains text-[12px] font-normal leading-4 tracking-[0.01px]">
            <div>-</div>
            <div>
              {Object.entries(res).map(([key, value]) => (
                <div key={key} className="flex gap-[2px] font-jetBrains">
                  <span className="text-[#22863A]">
                    {key === "name" ? "alert" : key === "query" ? "expr" : key}
                  </span>
                  :<span className="text-[#032F62]">{value.toString()}</span>
                </div>
              ))}
              {!res.hasOwnProperty("for") && (
                <div className="flex gap-[2px] font-jetBrains">
                  <span className="text-[#22863A]">for</span>:
                  <span className="text-[#032F62]">0m</span>
                </div>
              )}
            </div>
          </div>
          <div
            className="flex py-2 pr-3 pl-2 cursor-pointer justify-center items-center gap-1 top-0 absolute right-0 rounded-none rounded-r bg-colors_slate_100"
            onClick={handleCopyToClipboard}
          >
            <img src="/copy.svg" alt="copy" />
            <div className="text-colors_slate_500 font-inter text-[10px] font-bold leading-4">
              {copyText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesCard;
