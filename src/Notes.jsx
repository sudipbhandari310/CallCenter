import React from 'react';
import './notes.css';

const Notes = () => {
  return (
    <div>
      <h4>Notes:</h4>
      <h6>Step - 1: Note addition</h6>
      <p>
        Ask client about exact site having issue (Eg. : Facebook, Facebook
        Reels, Instagram, Insta Reels, Youtube, Youtube Shorts, WhatsApp, Viber,
        etc.)
      </p>
      <hr></hr>
      <h6>Step - 2: Note Addition</h6>
      <p>
        Reset bandwidth from customer portal Login → bandwidth selector → Reset
        bandwidth
      </p>
      <hr></hr>

      <h6>Step - 2 Step update</h6>
      <p>
        If not same reset from bandwidth selector. Suggest client run a speed
        test for confirmation. Ticket: Close under current bandwidth is lower
        than subscribed.
      </p>
      <hr></hr>

      <h6>Step - 3</h6>
      <p>
        Verify Current R.X. Power [&lt;-26 dbm] (Step Update) Basic Troubleshoot
        (Clickable option). After clicking, jump to step - 5. (Technical change
        if possible) Do not forget to inform the client about low power level
        issues before assigning a ticket. (Note)
      </p>

      <hr></hr>

      <h6>Step - 4</h6>
      <p>
        Do not forget to inform the client about power level difference issues
        before assigning a ticket. (Note)
      </p>

      <hr></hr>

      <h6>Step - 5</h6>
      <p>
        Inform network band (2.4/5) and signal strength in dbm. (Step Update)
        Device verification process: Device Name / Device MAC Address / IP
        Address. (note) Do not forget to disable test SSID if you have created
        it for (Device Verification / Speed test) (Note)
      </p>
      <hr></hr>
      <h6>Step - 6 </h6>
      <p>
        Do not forget to inform the client about the ping result of the device.
        (Note)
      </p>

      <hr></hr>

      <h6>Step - 8: (Step 6 → Ping not fine → Step 7 → range not fine)</h6>
      <p>
        Ticket header selection: If the device was connected on 2.4 → User
        connected beyond 2.4Ghz coverage If the device was connected on 5 → User
        connected beyond 5Ghz coverage In case of single-band ONU → user
        connected in Bad RSSI
      </p>

      <hr></hr>
      <h6>
        Step - 10: (Step - 6 → ping not fine → Step 7 → Range fine → Ping Not
        Fine in (another device))
      </h6>
      <p>Channel must be on auto always. (Note)</p>
      <hr></hr>
      <h6>
        After Step - 10: (Step - 6 → ping not fine → Step 7 → Range fine → Ping
        Not Fine in (another device) → Solved/Not Solved (Step Update))
      </h6>
      <p>
        Ticket header selection: If the device was connected on 2.4 → Channel
        Interference If the device was connected on 5 → Channel interference
        seen at 5Ghz In case of single-band ONU → Channel Interference
      </p>
      <hr></hr>
      <h6>
        After Step - 10: (Step - 6 → ping fine → Step 7 → Speedtest Not Fine →
        Step - 8 → OMCI Not fine → Step-9 → Not solved (Step Update))
      </h6>
      <p>
        Ticket header selection: Close Under Current Bandwidth Lower Than
        Subscribed
      </p>
    </div>
  );
};

export default Notes;
