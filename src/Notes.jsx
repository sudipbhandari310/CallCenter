import React, { useState } from 'react';
import './notes.css';

const steps = [
  {
    title: 'Step - 1: Note addition',
    content:
      'Ask client about exact site having issue (Eg.: Facebook, Facebook Reels, Instagram, Insta Reels, Youtube, Youtube Shorts, WhatsApp, Viber etc.)',
  },
  {
    title: 'Step - 2: Note Addition',
    content:
      'Reset bandwidth from customer portal Login → bandwidth selector → Reset bandwidth',
  },
  {
    title: 'Step - 2 Step update',
    content:
      'If not same reset from bandwidth selector. Suggest client to run speed test for confirmation. Ticket: Close under current bandwidth is lower than subscribed.',
  },
  {
    title: 'Step - 3',
    content:
      'Verify Current R.X. Power [<-26 dbm] (Step Update). Basic Troubleshoot (Clickable option). After clicking, jump to step - 5. (Technical change if possible). Do not forget to inform client about low power level issue before assigning ticket. (Note)',
  },
  {
    title: 'Step - 4',
    content:
      'Do not forget to inform client about power level difference issue before assigning ticket. (Note)',
  },
  {
    title: 'Step - 5',
    content:
      'Inform network band(2.4/5) and signal strength in dbm. (Step Update). Device verification process: Device Name / Device MAC Address / IP Address.(note). Do not forget to disable test SSID if you have created for (Device Verification / Speed test) (Note)',
  },
  {
    title: 'Step - 6',
    content:
      'Do not forget to inform client about ping result of device. (Note)',
  },
  {
    title: 'Step - 8',
    content:
      'Ticket header selection: If device was Connected on 2.4 → User connected beyond 2.4Ghz coverage. If device was Connected on 5 → User connected beyond 5Ghz coverage. In case of single band ONU → user connected in Bad RSSI',
  },
  {
    title: 'Step - 10',
    content: 'Channel must be on auto always. (Note)',
  },
  {
    title: 'After Step - 10',
    content:
      'Ticket header selection: Close Under Current Bandwidth Lower Than Subscribed',
  },
];

const Notes = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((c) => c + 1);
  };
  return (
    <div className='notes'>
      <h2>Notes</h2>
      <h3>{steps[currentStep].title}</h3>
      <p className='noteContent'>{steps[currentStep].content}</p>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Notes;
