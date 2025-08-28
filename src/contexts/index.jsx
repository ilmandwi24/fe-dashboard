import React from 'react';
import { InfoRapatContextProvider } from './InfoRapatContext';
import { InfoRuangMeetingProvider } from './InfoRuangMeeting';

export * from './InfoRapatContext';
export * from './InfoRuangMeeting';

// Optional: Combine providers for easier wrapping in App.js
export const AppProviders = ({ children }) => {
  return (
    <InfoRuangMeetingProvider>
      <InfoRapatContextProvider>{children}</InfoRapatContextProvider>
    </InfoRuangMeetingProvider>
  );
};