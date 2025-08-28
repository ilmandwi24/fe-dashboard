import { useInfoRapat } from "@/contexts";
import React from "react";

export default function DataRuangMeeting() {
  const {pesanan} = useInfoRapat();
  function handleTanggal(tanggal) {
    const date = new Date(tanggal);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {pesanan.length > 0 ? pesanan.map((item, index) => (
           <div class="bg-white flex flex-col transform transition duration-300 hover:scale-110 rounded-lg shadow-lg w-92 hover:shadow-xl p-2">
          <div class="   bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2.5 rounded-lg h-25"></div>

          <div class="px-5 pt-2 flex flex-col">
            <h2 class="font-semibold">{item.infoRoomMeeting || "Ruang Meeting"}</h2>
            <h3>{item.infoUnitOffice || "Unit Office"}</h3>
            <h4>Rp. {new Intl.NumberFormat("id-ID").format(item.nominal) || "Harga"}</h4>
            <p>{handleTanggal(item.tanggalBooking) || "Tanggal"}</p>
            <p>{item.waktuMulai || "Waktu Mulai"} - {item.waktuSelesai || "Waktu Selesai"}</p>
          
          </div>
        </div>
      )) :  <div className="flex flex-col items-center justify-center h-48 text-center p-6 bg-gray-50 rounded-xl border border-dashed border-gray-300">
      {/* Icon placeholder */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700">Tidak ada pesanan</h2>
     
    </div>}
    </div>
  );
}
