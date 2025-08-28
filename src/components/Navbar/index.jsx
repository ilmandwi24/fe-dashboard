import React from "react";
import logoPln from "../../assets/logo.svg";
import foto from "../../assets/foto.png";
import { Bell, ChevronDown, ChevronRight, Megaphone, Settings } from "lucide-react"; // Import desired Lucide icons

export default function Navbar() {
  return (
    <div
      data-close="false"
      data-drilldown="true"
      data-icon="true"
      data-overflow="false"
      data-property-1="Default"
      className="w-full px-5 py-3 border-b border-gray-100 inline-flex justify-start items-center gap-3"
    >
      <div className="size-8 relative overflow-hidden">
        <div className="size-7 left-[1.33px] top-[1.36px] absolute bg-Icon-Grey" />
      </div>
      <div className="flex-1 inline-flex  items-start gap-1">
       
        <Settings strokeWidth={1} />
        <div className="self-stretch justify-start text-neutral-700 text-lg font-bold font-['Roboto'] uppercase leading-snug">
         DaSHBOARD
        </div>
      </div>
      <div className="size- flex justify-start items-center gap-2.5">
        <ChevronRight strokeWidth={1} />
      </div>
    </div>
  );
}
