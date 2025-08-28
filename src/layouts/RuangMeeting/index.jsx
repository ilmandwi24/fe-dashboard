import React, { useEffect } from "react";
import { Plus } from "lucide-react";
import { Link, useLocation } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Outlet } from "react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
export default function RuangMeeting() {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const [currentLink, setCurrentLink] = useState("");
  // Pastikan pathArray memiliki setidaknya 3 elemen untuk menghindari error
  //   const thirdSegment = pathArray.length > 2 ? pathArray[2] : null;
  useEffect(() => {
    console.log("Hello", pathArray[2] == "");
    setCurrentLink(toTitleWithSpaces(pathArray[2]));
  }, [location]);

  function toTitleWithSpaces(str) {
    return str
      .replace(/[-_]+/g, " ") // ganti - atau _ jadi spasi
      .trim() // rapikan spasi di awal/akhir
      .toLowerCase() // jadikan huruf kecil semua dulu
      .replace(/\b\w/g, (c) => c.toUpperCase()); // kapital tiap kata
  }

  return (
    <>
      <div className="w-[1234px] inline-flex justify-between items-center">
        <div className="size- inline-flex flex-col justify-start items-start gap-1">
          <div className="size- inline-flex justify-start items-start gap-4">
           {pathArray[2] != "" && ( <div
              data-condition="True"
              data-hover="False"
              data-property-1="Leading Icon"
              data-style="Fill Button"
              className="size-10 flex justify-start items-start"
            >
              
                <Link
                  to={`/${pathArray[1]}/`}
                  className="flex-1 self-stretch p-3 bg-slate-500 rounded-lg flex justify-center items-center gap-2"
                >
                  <ChevronLeft width={18} color="white" />
                </Link>
              
            </div>
            )}
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-zinc-800 text-3xl font-bold font-['Open_Sans'] tracking-tight">
                Ruang Meeting
              </div>
              <div className=" inline-flex justify-start items-center gap-1">
                <div className="justify-start text-neutral-400 text-sm font-normal font-['Open_Sans'] tracking-tight">
                  Ruang Meeting
                </div>
                {currentLink !== "" &&  <div className="relative h-4 justify-start text-slate-500 text-sm font-normal ">
                  <ChevronRight width={16}  className="relative bottom-1"/>
                </div>
}
               
                <div className="justify-start text-slate-500 text-sm font-normal font-['Open_Sans'] tracking-tight">
                  {currentLink !== "" && currentLink}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-condition="True"
          data-hover="False"
          data-property-1="Leading Icon & Label"
          data-style="Fill Button"
          className="size- flex justify-start items-start"
        >
          {pathArray[2] == "" && (
            <Link to="/ruang-meeting/pesan-ruangan">
              <div
                data-label="True"
                data-leading-icon="True"
                data-trailing-icon="False"
                className="size- pl-3 pr-4 py-3 bg-slate-500 rounded-lg flex justify-center items-center gap-2"
              >
                <Plus
                  size={18}
                  strokeWidth={1}
                  absoluteStrokeWidth
                  color="white"
                />
                <div className="justify-center text-white text-sm font-semibold font-['Open_Sans'] tracking-wide">
                  Pesan Ruangan
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
