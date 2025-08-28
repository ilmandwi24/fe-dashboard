import React, { useEffect, useState } from "react";
import { ComboboxDemo } from "../ComboboxDemo";
import { useInfoRapat, useInfoRuangMeeting } from "@/contexts";

export default function InfoRuangMeeting() {
  const [office, setOffice] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [loadingOffice, setLoadingOffice] = useState(false);

  const [meetingRoom, setMeetingRoom] = useState([]);

  const [filteredMeetingRoom, setFilteredMeetingRoom] = useState([]);
  const [selectedMeetingRoom, setSelectedMeetingRoom] = useState(null);
  const [loadingMeetingRoom, setLoadingMeetingRoom] = useState(false);

  const {kapasitas, setKapasitas} = useInfoRapat();
 
  useEffect(() => {
    setLoadingOffice(true);
    fetch(
      "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterOffice"
    )
      .then((res) => {
        if (res.ok) {
          //   console.log(res.json());
          return res.json();
        }

        // handle error
      })
      .then((data) => {
        setOffice(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingOffice(false);
      });
  }, []);

  //   get meeting rooms
  useEffect(() => {
    // setLoadingOffice(true)
    setSelectedMeetingRoom(null);
    
    fetch(
      "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms"
    )
      .then((res) => {
        if (res.ok) {
          //   console.log(res.json());
          return res.json();
        }

        // handle error
      })
      .then((data) => {
        // setOffice(data);
        setMeetingRoom(data);
        setFilteredMeetingRoom(
          data.filter((item) => item.officeId === selectedOffice)
        );
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // setLoadingOffice(false);
      });
  }, [selectedOffice]);

  useEffect(() => {
    const result = meetingRoom.filter(
      (item) => item.id === selectedMeetingRoom
    );

    result.length > 0 && setKapasitas(result[0].capacity);
  }, [selectedMeetingRoom]);
  return (
    <div className="size- flex flex-col justify-start items-start gap-4">
      <div className="justify-start text-zinc-800 text-base font-semibold font-['Open_Sans']">
        Informasi Ruang Meeting
      </div>
      <div className="w-[1174px] inline-flex justify-start items-start gap-5">
        <div className="size- inline-flex flex-col justify-start items-start gap-2">
          <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
            Unit
          </div>
          {/* {loadingOffice ? (
            <div>Loading...</div>
          ) : (
            <ComboboxDemo dataCombo={office} loading={loadingOffice} />
          )} */}
          <ComboboxDemo
            dataCombo={office}
            value={selectedOffice}
            onChange={(e) => {
                console.log(e);
              setSelectedOffice(e);
            //   setUnit
              
            }}
            loading={loadingOffice}
            tipe={"office"}
          />
        </div>
        <div className="size- inline-flex flex-col justify-start items-start gap-2">
          <div className="justify-start text-zinc-800 text-sm font-semibold font-['Open_Sans'] tracking-tight">
            Ruang Meeting
          </div>
          <ComboboxDemo
            dataCombo={filteredMeetingRoom}
            value={selectedMeetingRoom}
            onChange={setSelectedMeetingRoom}
            loading={loadingOffice}
            tipe={"room"}
          />
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
                {kapasitas || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
