import React from "react";
import { ComboboxDemo } from "../ComboboxDemo";

export default function Card() {
  return (
    <div>
      <div className="self-stretch px-7 py-5 bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(106,106,106,0.10)] outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-start gap-9">
        <div className="size- flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-zinc-800 text-base font-semibold font-['Open_Sans']">
            Informasi Ruang Meeting
          </div>
          <div className="w-[1174px] inline-flex justify-start items-start gap-5">
            <div className="size- inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                Unit
              </div>
              <ComboboxDemo/>
            </div>
            <div className="size- inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                Ruang Meeting
              </div>
              <div
                data-condition="On"
                data-property-1="Trailing & Label"
                data-value="Off"
                className="w-64 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex justify-start items-start"
              >
                <div
                  data-leading-icon="Off"
                  data-status="Default"
                  data-trailing-icon="On"
                  className="flex-1 pl-4 pr-3 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-2"
                >
                  <div className="flex-1 h-4 justify-start text-neutral-400 text-sm font-normal font-['Open_Sans'] tracking-tight">
                    Pilih Ruang Meeting
                  </div>
                  <div
                    data-property-1="Chevron Down"
                    className="size-4 relative overflow-hidden"
                  >
                    <div className="w-2 h-1 left-[5.07px] top-[6.66px] absolute bg-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1174px] inline-flex justify-start items-start gap-5">
            <div className="size- inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                Kapasitas
              </div>
              <div
                data-condition="Off"
                data-property-1="Label"
                data-value="Off"
                className="w-64 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-start items-start"
              >
                <div
                  data-leading-icon="Off"
                  data-status="Default"
                  data-trailing-icon="Off"
                  className="flex-1 h-10 px-4 py-3 bg-neutral-300 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-100 flex justify-start items-start"
                >
                  <div className="flex-1 self-stretch justify-start text-zinc-800 text-sm font-normal font-['Open_Sans'] tracking-tight">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-0 outline outline-2 outline-offset-[-1px] outline-zinc-100" />
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
                <div
                  data-condition="On"
                  data-property-1="Leading & Label"
                  data-value="On"
                  className="self-stretch rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex justify-start items-start"
                >
                  <div
                    data-leading-icon="On"
                    data-status="Default"
                    data-trailing-icon="Off"
                    className="flex-1 pl-3 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-2"
                  >
                    <div
                      data-property-1="Calendar"
                      className="size-4 relative overflow-hidden"
                    >
                      <div className="size-3.5 left-[2.50px] top-[1.50px] absolute bg-slate-500" />
                    </div>
                    <div className="flex-1 h-4 justify-start text-zinc-800 text-sm font-normal font-['Open_Sans'] tracking-tight">
                      28 Juni 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="size- inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                Waktu Mulai
              </div>
              <div
                data-condition="On"
                data-property-1="Trailing & Label"
                data-value="Off"
                className="w-64 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex justify-start items-start"
              >
                <div
                  data-leading-icon="Off"
                  data-status="Default"
                  data-trailing-icon="On"
                  className="flex-1 pl-4 pr-3 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-2"
                >
                  <div className="flex-1 h-4 justify-start text-neutral-400 text-sm font-normal font-['Open_Sans'] tracking-tight">
                    Pilih Waktu Mulai
                  </div>
                  <div
                    data-property-1="Chevron Down"
                    className="size-4 relative overflow-hidden"
                  >
                    <div className="w-2 h-1 left-[5.07px] top-[6.66px] absolute bg-slate-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="size- inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                Waktu Selesai
              </div>
              <div
                data-condition="On"
                data-property-1="Trailing & Label"
                data-value="Off"
                className="w-64 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex justify-start items-start"
              >
                <div
                  data-leading-icon="Off"
                  data-status="Default"
                  data-trailing-icon="On"
                  className="flex-1 pl-4 pr-3 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-2"
                >
                  <div className="flex-1 h-4 justify-start text-neutral-400 text-sm font-normal font-['Open_Sans'] tracking-tight">
                    Pilih Waktu Selesai
                  </div>
                  <div
                    data-property-1="Chevron Down"
                    className="size-4 relative overflow-hidden"
                  >
                    <div className="w-2 h-1 left-[5.07px] top-[6.66px] absolute bg-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1174px] inline-flex justify-start items-start gap-5">
            <div className="size- inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                Jumlah Peserta
              </div>
              <div
                data-condition="On"
                data-property-1="Label"
                data-value="Off"
                className="w-64 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex justify-start items-start"
              >
                <div
                  data-leading-icon="Off"
                  data-status="Default"
                  data-trailing-icon="Off"
                  className="flex-1 h-10 px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-start"
                >
                  <div className="flex-1 self-stretch justify-start text-neutral-400 text-sm font-normal font-['Open_Sans'] tracking-tight">
                    Masukkan Jumlah Peserta
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-5">
            <div className="w-[722.13px] self-stretch flex justify-start items-start gap-2.5">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                  Jenis Konsumsi
                </div>
                <div
                  data-condition="Off"
                  className="size- inline-flex justify-start items-center gap-2 overflow-hidden"
                >
                  <div className="size-4 bg-white rounded-sm border border-gray-200" />
                  <div className="justify-start text-zinc-800 text-sm font-normal font-['Open_Sans']">
                    Snack Siang
                  </div>
                </div>
                <div
                  data-condition="Off"
                  className="size- inline-flex justify-start items-center gap-2 overflow-hidden"
                >
                  <div className="size-4 bg-white rounded-sm border border-gray-200" />
                  <div className="justify-start text-zinc-800 text-sm font-normal font-['Open_Sans']">
                    Makan Siang
                  </div>
                </div>
                <div
                  data-condition="Off"
                  className="size- inline-flex justify-start items-center gap-2 overflow-hidden"
                >
                  <div className="size-4 bg-white rounded-sm border border-gray-200" />
                  <div className="justify-start text-zinc-800 text-sm font-normal font-['Open_Sans']">
                    Snack Sore
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1174px] inline-flex justify-start items-start gap-5">
            <div className="w-64 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
                Nominal Konsumsi
              </div>
              <div className="self-stretch h-10 relative rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300">
                <div className="w-52 h-4 left-[53px] top-[12px] absolute justify-start text-zinc-800 text-sm font-normal font-['Open_Sans'] tracking-tight">
                  0
                </div>
                <div className="w-11 h-10 left-0 top-0 absolute bg-gray-200 rounded-tl-lg rounded-bl-lg" />
                <div className="left-[12px] top-[12px] absolute justify-start text-zinc-800 text-sm font-normal font-['Open_Sans']">
                  Rp.
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <div
            data-condition="False"
            data-hover="False"
            data-property-1="Label"
            data-style="Fill Button"
            className="size- flex justify-start items-start"
          >
            <div
              data-label="True"
              data-leading-icon="False"
              data-trailing-icon="False"
              className="size- px-4 py-3 bg-neutral-300 rounded-lg flex justify-center items-center gap-2"
            >
              <div className="justify-start text-neutral-400 text-sm font-semibold font-['Open_Sans'] tracking-wide">
                Simpan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
