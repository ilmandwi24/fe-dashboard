import { createContext, useContext, useEffect, useState } from "react";

export const InfoRuangMeetingContext = createContext();

export const InfoRuangMeetingProvider = ({ children }) => {
  const [infoUnitOffice, setInfoUnitOffice] = useState(null);
  const [infoRoomMeeting, setInfoRoomMeeting] = useState(null);

  const updateInfoUnitOffice = (data) => {
    setInfoUnitOffice(data);
  };

  const updateInfoRoomMeeting = (data) => {
    setInfoRoomMeeting(data);
  };

  useEffect(() => {
    console.log("infoUnitOfficeUpdate", infoUnitOffice);
  }, [infoUnitOffice]);

  useEffect(() => {
    console.log("infoRoomMeetingUpdate", infoRoomMeeting);
  }, [infoRoomMeeting]);

  return (
    <InfoRuangMeetingContext.Provider
      value={{ infoUnitOffice, updateInfoUnitOffice,infoRoomMeeting, updateInfoRoomMeeting }}
    >
      {children}
    </InfoRuangMeetingContext.Provider>
  );
};


export const useInfoRuangMeeting = () => useContext(InfoRuangMeetingContext);
