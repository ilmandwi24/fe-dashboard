import React, { useEffect } from "react";
import { DatePicker } from "../DatePicker";
import { Input } from "@/components/ui/input";
import InputWaktu from "../InputWaktu";
import { useInfoRapat } from "@/contexts";

import InfoRapatKonsumsi from "../InfoRapatKonsumsi";
import { se } from "date-fns/locale";
import { set } from "date-fns";
export default function InfoRapat() {
  const {
    waktuMulai,
    onChangeWaktuMulai,
    waktuSelesai,
    onChangeWaktuSelesai,
    jumlahPeserta,
    onChangeJumlahPeserta,
    nominal,
    kapasitas,
  } = useInfoRapat();
  function handleWaktuMulai(e) {
    setWaktuMulai(e.target.value);
  }

  function handleWaktuSelesai(e) {
    setWaktuSelesai(e.target.value);
  }

  useEffect(() => {
    console.log("Waktu Mulai:", waktuMulai);
    console.log("Waktu Selesai:", waktuSelesai);
  }, [waktuMulai, waktuSelesai]);

  useEffect(() => {
    console.log("Waktu Mulai:::", waktuMulai);
  }, []);

//   Jenis konsumsi
const items = [
  {
    id: "snacksiang",
    label: "Snack Siang",
  },
  {
    id: "makansiang",
    label: "Makan Siang",
  },
  {
    id: "snacksore",
    label: "Snack Sore",
  },
  
]

  const [selected, setSelected] = React.useState([]);
 const handleChange = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // uncheck
        : [...prev, value] // check
    );
    
  };
  return (
    <>
      <div className="justify-start text-zinc-800 text-base font-semibold font-['Open_Sans']">
        Informasi Rapat
      </div>
      <div className="size- flex flex-col justify-start items-start gap-6">
        <div className="w-[1174px] inline-flex justify-start items-start gap-5">
          <div className="w-64 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="w-80 justify-start">
                <span class="text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                  Tanggal Rapat
                </span>
                <span class="text-red-400 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                  *
                </span>
              </div>
              <DatePicker />
            </div>
          </div>
          <div className="size- inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
              Waktu Mulai
            </div>
            <InputWaktu
              dataWaktu={waktuMulai}
              setDataWaktu={onChangeWaktuMulai}
              waktuTambahan={1}
            />
          </div>
          <div className="size- inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
              Waktu Selesai
            </div>
            <InputWaktu
              dataWaktu={waktuSelesai}
              setDataWaktu={onChangeWaktuSelesai}
              waktuTambahan={2}
            />
          </div>
        </div>
        <div className="w-[1174px] inline-flex justify-start items-start gap-5">
          <div className="size- inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
              Jumlah Peserta
            </div>
            <Input
              type="number"
              id="jml-peserta"
              step="1"
              placeholder="Jumlah Peserta"
              value={jumlahPeserta}
              onChange={(e) => {
                const value = Number(e.target.value) || 0;
                if (value > kapasitas) {
                    alert("Kapasitas telah terpenuhi");
                    // setJumlahPeserta(0); 
                  return;
                }
                onChangeJumlahPeserta(value);
              }}
              min="0"
              className="bg-background 
    "
            />
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div className="w-[722.13px] self-stretch flex justify-start items-start gap-2.5">
            <InfoRapatKonsumsi />
          </div>
        </div>
        <div className="w-[1174px] inline-flex justify-start items-start gap-5">
          <div className="w-64 inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
              Nominal Konsumsi
            </div>
            <div className="self-stretch h-10 relative rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300">
              <div className="w-52 h-4 left-[53px] top-[12px] absolute justify-start text-zinc-800 text-sm font-normal font-['Open_Sans'] tracking-tight">
                {new Intl.NumberFormat("id-ID").format(nominal)}
              </div>
              <div className="w-11 h-10 left-0 top-0 absolute bg-gray-200 rounded-tl-lg rounded-bl-lg" />
              <div className="left-[12px] top-[12px] absolute justify-start text-zinc-800 text-sm font-normal font-['Open_Sans']">
                Rp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
