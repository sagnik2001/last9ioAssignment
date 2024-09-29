import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import Card from "@molecules/Cards";
import { getContent } from "../../services/call";
import Modal from "@features/Modal";

interface Rule {
  name: string;
  services: Service[];
}

interface Service {
  exporters: Exporter[];
}

interface Exporter {
  rules: { name: string }[];
}

interface ContentResponse {
  groups: Rule[];
}

const Content = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [search, setSearch] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Service | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const getRules = async () => {
    const response: ContentResponse | undefined = await getContent();
    setRules(response?.groups || []);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectRule = (service: Service) => {
    setSelectedProduct(service);
    toggleModal();
  };

  useEffect(() => {
    getRules();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        searchInputRef.current?.focus();
      } else if (event.key === "Escape") {
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex max-w-[960px] mx-auto p-12 max-lg:p-4 px-0 flex-col items-start gap-4 self-stretch">
      <div className="text-colors_slate_600 font-inter text-lg leading-7 font-medium">
        Browse Library
      </div>
      <div className="flex items-start gap-2 self-stretch">
        <div className="flex items-center gap-1 p-[7px] px-3 flex-[1_0_0] rounded border border-colors_slate_200 bg-colors_base_white">
          <img src="/searchIcon.svg" alt="Search Icon" className="w-4 h-4" />
          <input
            ref={searchInputRef}
            className="text-colors_slate_400 flex-[1_0_0] font-inter text-sm font-medium leading-4 tracking-[0.01px]"
            placeholder="Search for a component"
            value={search}
            onChange={handleSearchChange}
          />
          <div className="flex w-[18px] h-[18px] flex-col justify-center items-center rounded-sm border border-colors_slate_100 bg-colors_slate_50">
            <div className="text-colors_slate_500 text-center font-inter text-[10px] font-bold leading-4 tracking-[0.1px] uppercase">
              /
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-y-auto hideScrollbar h-[68vh] overflow-x-hidden items-start content-start gap-4 self-stretch flex-wrap">
        {rules.map((res, index) => {
          const filteredServices = res.services.filter((service) =>
            service.exporters.some((exporter) =>
              exporter.rules?.some((rule) =>
                rule.name.toLowerCase().includes(search.toLowerCase())
              )
            )
          );

          if (filteredServices.length > 0) {
            return (
              <div key={index} className="w-full flex flex-col gap-4">
                <div className="flex w-full items-start">
                  <div className="text-colors_slate_400 uppercase font-inter text-[10px] font-bold leading-4">
                    {res.name}
                  </div>
                </div>
                <div className="grid gap-4 w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                  {filteredServices.map((service, idx) => (
                    <Card
                      key={idx}
                      service={service}
                      toggleModal={() => handleSelectRule(service)}
                    />
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {showModal && selectedProduct && (
        <Modal toggleModal={toggleModal} rule={selectedProduct} />
      )}
    </div>
  );
};

export default Content;
