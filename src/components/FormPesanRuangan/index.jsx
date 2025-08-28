import React from "react";
import InfoRuangMeeting from "../InfoRuangMeeting";
import InfoRapat from "../InfoRapat";
import { useInfoRapat } from "@/contexts";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function FormPesanRuangan() {
    const navigate = useNavigate();
  const {simpanPesanan} = useInfoRapat();
  return (
    <div>
      <div className="self-stretch px-7 py-5 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(106,106,106,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-start gap-9">
        <InfoRuangMeeting />
        <div className="self-stretch h-0 outline outline-2 outline-offset-[-1px] outline-zinc-100" />
        <InfoRapat />
        <div className="self-stretch h-0 outline outline-2 outline-offset-[-1px] outline-zinc-100" />
        <div className="self-stretch inline-flex justify-end items-center gap-2.5">
          <div
            data-condition="True"
            data-hover="False"
            data-property-1="Label"
            data-style="Nude Button"
            className="size- flex justify-start items-start"
          >
            <div
              data-label="True"
              data-leading-icon="False"
              data-trailing-icon="False"
              className="size- px-4 py-3 rounded-lg flex justify-center items-center gap-2"
            >
              <div className="justify-start text-red-400 text-sm font-semibold font-['Open_Sans'] tracking-wide">
                Batal
              </div>
            </div>
          </div>
          <Button onClick={()=>{
            simpanPesanan();
            toast("Ruang Meeting Berhasil dipesan.");
            navigate(-1 );

          }} className="cursor-pointer bg-blue-500 text-white hover:bg-blue-700">Simpan</Button>
        </div>
      </div>
    </div>
  );
}
