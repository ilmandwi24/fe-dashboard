import { use, useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { House, File, Plus, ChevronRight } from "lucide-react";
import RuangMeeting from "./layouts/RuangMeeting";
import { BrowserRouter, Routes, Route } from "react-router";
import DataRuangMeeting from "./components/DataRuangMeeting";
import FormPesanRuangan from "./components/FormPesanRuangan";
import { Toaster } from "@/components/ui/sonner";
import generation from "@/assets/generation.svg";

import { AppProviders } from "./contexts";
import { ComboxBoxSummary } from "./components/ComboBoxSummary";
import { ChartRadialText } from "./components/ChartRadialText";
function App() {
  const [count, setCount] = useState(0);
  const [summary, setSummary] = useState([]);
  const [selectedSummary, setSelectedSummary] = useState(null);
  useEffect(() => {
    fetch(
      "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/summaryBookings"
    )
      .then((res) => {
        if (res.ok) {
          //   console.log(res.json());
          return res.json();
        }

        // handle error
      })
      .then((data) => {
        setSummary(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  const handleSelectedSummary = (value) => {
    if (value == null) {
      setSelectedSummary(null);
    }
    console.log("00000");
    console.log(summary);
    const found = summary.find((item) => item.id === value);
    console.log(found?.data);
    if (found) {
      console.log("found");
      setSelectedSummary(found); // simpan ke state baru
    }
  };

  // useEffect(() => {
  //   console.log("selectedSummary");
  //   console.log(selectedSummary?.data.length);
  // }, [selectedSummary]);
  const seluruhTotalPrice = () => {
    let total = 0;
    selectedSummary?.data.forEach((item) => {
      total += item.totalPrice;
    });
    return total;
  }
  return (
    <AppProviders>
      <div>
        <Navbar />
        <div className="p-6 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch h-12 inline-flex justify-start items-center gap-4">
            <div
              data-label="true"
              data-property-1="Hover"
              className="w-60 rounded-lg inline-flex flex-col justify-center items-start gap-1"
            >
              <div className="self-stretch opacity-80 justify-start text-neutral-600 text-xs font-normal font-['Roboto'] tracking-tight">
                Periode
              </div>
              <ComboxBoxSummary
                data={summary}
                handleSelectedSummary={handleSelectedSummary}
              />
            </div>
          </div>
          <div className="self-stretch h-12 inline-flex justify-start items-center gap-4">
            <div className="w-56 self-stretch inline-flex justify-start items-start gap-4">
              {selectedSummary?.data.length > 0 ? (
                selectedSummary.data.map((item) => {
                
                  return (
                    <div className="flex-1 self-stretch bg-White rounded-md outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-start items-start gap-1">
                      <div
                        data-close="false"
                        data-drilldown="false"
                        data-icon="true"
                        data-overflow="false"
                        data-property-1="Default"
                        className="self-stretch py-3  pl-1 border-b inline-flex justify-start items-center gap-1"
                      >
                        <img src={generation} alt="" />
                        <div className="flex-1 inline-flex flex-col justify-center items-start gap-0.5">
                          <div className="self-stretch justify-start text-neutral-400 text-base font-bold font-['Roboto'] uppercase leading-snug">
                            {item.officeName}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch h-64 inline-flex flex-col justify-start items-start gap-2.5">
                          {
                          item.detailSummary.map((detail) => {
                            const totalPrice = detail.totalConsumption.reduce((sum, item) => sum + Number(item.totalPrice || 0), 0);
                            console.log(totalPrice);
                            return (
                              <div className="self-stretch flex-1 p-3 bg-Card-Background-2 rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col justify-start items-start gap-1">
                                <div className="self-stretch justify-start text-neutral-600 text-sm font-normal font-['Roboto'] tracking-tight">
                                  {detail.roomName}
                                </div>
                                <div className="self-stretch py-2 inline-flex justify-start items-center gap-1.5">
                                  <div className="w-20 inline-flex flex-col justify-start items-start gap-1.5">
                                    <div className="justify-center text-Schemes-Secondary text-xs font-normal font-['Inter']">
                                      Persentase Pemakaian{" "}
                                    </div>
                                    <div className="self-stretch justify-center text-black text-xl font-bold font-['Inter']">
                                      {detail.averageOccupancyPerMonth}%
                                    </div>
                                  </div>
                                  <ChartRadialText persen={detail.averageOccupancyPerMonth}/>
                                </div>
                                <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                                  <div className="w-full inline-flex flex-col justify-start items-start gap-1.5">
                                    <div className="justify-center text-Schemes-Secondary text-xs font-normal font-['Inter']">
                                      Nominal Konsumsi
                                    </div>
                                    <div className="justify-center text-black text-xl font-bold font-['Inter']">
                                   
                                      Rp. {new Intl.NumberFormat("id-ID").format(totalPrice)}
                                    </div>
                                  </div>
                                </div>
                                {detail.totalConsumption.length > 0 && detail.totalConsumption.map((consumption) => {
                                  return  (
                                  <div className="w-52 h-8 inline-flex justify-start items-center gap-5">
                                  <div className="w-24 justify-start text-black text-[10px] font-medium font-['Roboto'] leading-none tracking-tight">
                                    {consumption.name}
                                  </div>
                                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-[3px]">
                                    <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
                                      <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                                        <div className="justify-start text-black/80 text-xs font-normal font-['Roboto'] leading-none tracking-tight">
                                          {consumption.totalPackage}
                                        </div>
                                      </div>
                                      <div className="self-stretch h-2 relative">
                                        <div className="w-6 h-2 left-0 top-0 absolute bg-Primary-New rounded-xs" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                )
                                })}
                                
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>belum dipilih</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </AppProviders>
  );
}

export default App;
