export const steps = [
  {
    id: 1,
    title: 'Step - 1: Note addition',
    content: ` <p>Ask client about exact site having issue (Eg.: Facebook, Facebook Reels, Instagram, Insta Reels, Youtube, Youtube Shorts, WhatsApp, Viber etc.)</p>`,
  },
  {
    id: 2,
    title: 'Step - 2: Note Addition',
    content: `<ol>
        <li>
          Reset bandwidth from customer portal Login → bandwidth selector →
          Reset bandwidth
        </li>
        <li>
          If not same reset from bandwidth selector. Suggest client to run speed
          test for confirmation. Ticket: Close under current bandwidth is lower
          than subscribed
        </li>
      </ol>`,
  },
  {
    id: 3,
    title: 'Step - 3 Step update',
    content: `<p>Verify Current R.X. Power [<-26 dbm] (Step Update). Basic Troubleshoot (Clickable option). After clicking, jump to step - 5. (Technical change if possible). Do not forget to inform client about low power level issue before assigning ticket. (Note)</p>`,
  },
  {
    id: 4,
    title: 'Step - 4',
    content: `<p>Do not forgot to inform client about power level difference issue before assigning ticket</p>`,
  },
  {
    id: 5,
    title: 'Step - 5: Inform Network Band and Signal Strength',
    content: `<ol>
        <li>
          Inform network band (2.4/5) and signal strength in dbm. (Step Update)
        </li>
        <li>
          Device verification process: Device Name / Device MAC Address / IP
          Address. (note)
        </li>
        <li>
          Do not forget to disable test SSID if you have created for (Device
          Verification / Speed test) (Note)
        </li>
      </ol>`,
  },
  {
    id: 6,
    title: 'Step - 6',
    content: `<p>Do not forget to inform client about ping result of device. (Note)'</p>`,
  },
  {
    id: 7,
    title: 'Step - 7',
    content: `<p>Nothing as of now</p>`,
  },
  {
    id: 8,
    title: 'Step - 8: (Step 6 → Ping not fine → Step 7 → Range not fine)',
    content: `<div>
        <h5>Ticket header selection:</h5>
        <ul>
          <li>
            If device was connected on 2.4 → User connected beyond 2.4GHz
            coverage
          </li>
          <li>
            If device was connected on 5 → User connected beyond 5GHz coverage
          </li>
          <li>In case of single band ONU → User connected in Bad RSSI</li>
        </ul>
      </div>`,
  },
  {
    id: 9,
    title: 'Step - 9',
    content: `<p>Nothing</p>`,
  },

  {
    id: 10,
    title: 'Step - 10',
    content: `<p>Channel must be on auto always. (Note)</p>`,
  },

  {
    id: 11,
    title:
      'After Step - 10: (Step - 6 → ping not fine → Step 7 → Range fine → Ping Not Fine in (another device) → Solved/Not Solved (Step Update)',
    content: `<ul>
        <li>If device was Connected on 2.4 → Channel Interference</li>
        <li>
          If device was Connected on 5 → Channel interference seen at 5Ghz{' '}
        </li>
        <li>In case of single band ONU → Channel Interference </li>
      </ul>`,
  },
  {
    id: 12,
    title:
      'After Step - 10: (Step - 6 → ping fine → Step 7 → Speedtest Not Fine → Step - 8 → OMCI Not fine → Step-9 → Not solved (Step Update)',
    content: ` <p>Close Under Current Bandwidth Lower Than Subscribed</p>`,
  },
];
