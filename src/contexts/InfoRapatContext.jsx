import { set } from "date-fns";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useInfoRuangMeeting } from ".";

const InfoRapatContext = createContext();

export const InfoRapatContextProvider = ({ children }) => {
  const [tanggalBooking, setTanggalBooking] = useState(null);
  const [waktuMulai, setWaktuMulai] = useState(null);
  const [waktuSelesai, setWaktuSelesai] = useState(null);
  const [jumlahPeserta, setJumlahPeserta] = useState(null);
  const [nominal, setNominal] = useState(100000);
  const [kapasitas, setKapasitas] = useState(null);

  const {infoUnitOffice, infoRoomMeeting} = useInfoRuangMeeting();

  const [konsumsi, setKonsumsi] = useState([]);
   const [selectedKonsumsi, setSelectedKonsumsi] = useState([]);

  const [pesanan, setPesanan] = useState([]);

  const onChangeWaktuMulai = (e) => {
    setWaktuMulai(e);
  };

  const onChangeWaktuSelesai = (e) => {
    setWaktuSelesai(e);
  };

  const onChangeJumlahPeserta = (e) => {
    setJumlahPeserta(e);
  };

  useEffect(() => {
    waktuMulai &&
      waktuSelesai &&
      setSelectedKonsumsi(getSelectedKonsumsi(waktuMulai, waktuSelesai));
  
    // setKonsumsi(updateKonsumsi(waktuMulai, waktuSelesai));

    // eslint-disable-next-line
  }, [waktuMulai, waktuSelesai]);

  // nominal dari jumlah peserta dikali seluruh harga selectedkonsumsi
  useEffect(() => {
    let total = 0;
 
    selectedKonsumsi.forEach((k) => {
      total += k.maxPrice;
    });
    setNominal(total * jumlahPeserta);
    // eslint-disable-next-line
  }, [jumlahPeserta, selectedKonsumsi]);

  
  

  const listValue = {
    waktuMulai,
    onChangeWaktuMulai,
    waktuSelesai,
    onChangeWaktuSelesai,
    jumlahPeserta,
    onChangeJumlahPeserta,
    selectedKonsumsi,
    setSelectedKonsumsi,
    nominal,
    konsumsi,
    setKonsumsi,
    kapasitas, 
    setKapasitas,
    tanggalBooking,
    setTanggalBooking,
    simpanPesanan,
    pesanan, setPesanan
  };

  // rules function
  function getSelectedKonsumsi(start, end) {
    
      const [sh, sm] = start.split(":").map(Number);
      const [eh, em] = end.split(":").map(Number);

      const startMinutes = sh * 60 + sm;
      const endMinutes = eh * 60 + em;

      const before11 = 11 * 60;
      const before14 = 14 * 60;

      let result = [];

      // RULES
      if (startMinutes < before11) {
        result.push(konsumsi.find((k) => k.name === "Snack Siang"));
      }
      if (endMinutes >= before11 && startMinutes <= before14) {
        result.push(konsumsi.find((k) => k.name === "Makan Siang"));
      }
      if (endMinutes > before14) {
        result.push(konsumsi.find((k) => k.name === "Snack Sore"));
      }
      console.log(result)
      return result;
    }
  function simpanPesanan(){
    console.log("simpan pesanan>>>>>>>>>>>>");
    
    const data = {
      tanggalBooking,
      waktuMulai,
      waktuSelesai,
      jumlahPeserta,
      nominal,
      infoUnitOffice,
      infoRoomMeeting,
      selectedKonsumsi
    }
    setPesanan([...pesanan, data])
    console.log(data);
    setNominal(0);
    setJumlahPeserta(null);
    setWaktuMulai(null);
    setWaktuSelesai(null);
    setKapasitas(0);
    
    console.log(infoUnitOffice);
    console.log(infoRoomMeeting);
  }
  return (
    <InfoRapatContext.Provider value={listValue}>
      {children}
    </InfoRapatContext.Provider>
  );
};

export const useInfoRapat = () => useContext(InfoRapatContext);
