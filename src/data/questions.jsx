import { FaArrowRight } from "react-icons/fa";

export const questions = [
  {
    id: 1,
    question: "In Which Site Client Is Having Issue?",
    question2: "Next Step",
    answers: [],
  },
  {
    id: 2,
    question: "Verify Current Bandwidth & Subscribed Bandwidth",
    question2: "If Same Proceed to Next Step",
    answers: [
      // eslint-disable-next-line react/jsx-key
      <p className="text-start">
        {" "}
        <FaArrowRight color="#05b328" /> If not Same reset from bandwidth
        selector <br />
        <span className="text-success fw-bold">
          {" "}
          <FaArrowRight color="#05b328" /> TICKET: Close under current bandwidth
          lower than subscribed.
        </span>
      </p>,
    ],
  },
  {
    id: 3,
    question: "Verify Current R.X. Power",
    question2: "If Power Level Is Fine -Proceed to Next Step",
    answers: [
      // eslint-disable-next-line react/jsx-key
      <p className="text-start">
        {" "}
        <FaArrowRight color="#05b328" /> Perform basic troubleshoot and assign
        for field visit <br />{" "}
        <span className="text-success fw-bold">
          {" "}
          <FaArrowRight color="#05b328" /> TICKET: Assign ticket under header
          low power level
        </span>
      </p>,
    ],
  },
  {
    id: 4,
    question: "Verify Difference Between OLT RX & Current RX. Power <5",
    question2: "If Difference is Not Greater than 5 dbm, Process to Next Step",
    answers: [
      // eslint-disable-next-line react/jsx-key
      <p className="text-start">
        {" "}
        <FaArrowRight color="#05b328" /> Perform basic troubleshoot and assign
        for field visit <br />{" "}
        <span className="text-success fw-bold">
          {" "}
          <FaArrowRight color="#05b328" /> TICKET: Assign ticket under header
          difference between OLT RX and current RX. power &lt;5
        </span>{" "}
      </p>,
    ],
  },
  {
    id: 5,
    question: "Device Verify",
    question2: "Next Step",
    answers: [
      // eslint-disable-next-line react/jsx-key
      <p className="text-start">
        {" "}
        <FaArrowRight color="#05b328" /> Inform network band and signal
        strength.
      </p>,
    ],
  },
  { id: 6, question: "Ping The Device?", answers: [] },
  { id: 7, question: "PERFORM SPEEDTEST(request customer)", answers: [] },
  { id: 8, question: "Domain Ping", answers: [] },
  {
    id: 9,
    question: "Verify The Issue Solved or Not?",
    answers: [
      "Perform basic troubleshoot and assign for field visit TICKET: Assign ticket under header difference between OLT RX and current RX. power <5",
    ],
  },
  { id: 10, question: "Check Range (<=-65dbm)", answers: [] },
  { id: 11, question: "PING ANOTHER DEVICE OF SAME BAND", answers: [] },
  { id: 12, question: "RECONNECT WIFI FROM FIRST DEVICE", answers: [] },
  { id: 13, question: "CHECK CHANNEL INTERFERENCE", answers: [] },
  { id: 14, question: "REFRESH CHANNEL AND ASK TO VERIFY ", answers: [] },
  { id: 15, question: "RECONNECT WIFI", answers: [] },
  { id: 16, question: "CHECK OMCI", answers: [] },
  { id: 17, question: "CHECK SINGLE DEVICE CONNECTION", answers: [] },
  {
    id: 18,
    question: "Single Device Connection and Speedtest Fine",
    answers: ["TICKET: CLOSE UNDER SPEEDTEST FINE HEADERS "],
  },
  {
    id: 19,
    question: "QUERY to L2/TL",
    answers: [
      "FOLLOW L2/TL QUERY GUIDANCE",
      "TICKET: Assign UNDER RELATED HEADER OF SPEEDTEST FINE ",
    ],
  },
  {
    id: 20,
    question: "QUERY to L2/TL",
    answers: [
      "FOLLOW L2/TL QUERY GUIDANCE",
      "TICKET: Assign UNDER RELATED HEADER OF SPEEDTEST FINE ",
    ],
  },
  {
    id: 21,
    question: "QUERY to L2/TL and FOLLOW L2/TL QUERY GUIDANCE",
    answers: [
      "L2/TL confirms to assign ticket to Followup",
      "TICKET: Assign UNDER RELATED HEADER OF SPEEDTEST FINE  ",
    ],
  }, //Step 9
  {
    id: 22,
    question: "SUGGEST SECONDARY ONU/ BEACON/ ONU PLACEMENT",
    answers: ["TICKET: USE RANGE ISSUES HEADER FOR TICKETING"],
  }, //Step 9
  {
    id: 23,
    question: "OMCI NOT FINE",
    answers: [
      "QUERY TO L2/TL TO ADJUST OMCI PROFILE",
      "AFTER OMCI UPDATE, PERFORM SPEEDTEST AGAIN",
    ],
  },
  {
    id: 24,
    question: "",
    answers: [
      "[Suggest] If Signal Strength was lower than -65DBM, Inform that range issues might occur and give probable solutions.",
      "TICKET: Close Under Related Header Of Speedtest Fine",
    ],
  },
  {
    id: 25,
    question: "",
    answers: ["TICKET: Close Under Current Bandwidth Lower Than Subscribed"],
  },
  {
    id: 26,
    question: "",
    answers: [
      "TICKET: Close Under 'High Latency in a single device with good RSSI'",
    ],
  },
  {
    id: 27,
    question: "",
    answers: [
      "Provide Solutions For Interference (If Signle Band ONU, suggest Dual ONU)",
      "TICKET: Close Under Channel Interference Header",
    ],
  },
  {
    id: 28,
    question: "",
    answers: [
      "TICKET: Close Under High Latency in a single device with Good RSSI ",
    ],
  },
  {
    id: 29,
    question: "QUERY to L2/TL and FOLLOW L2/TL QUERY GUIDANCE",
    answers: ["TICKET: Assign UNDER RELATED HEADER OF SPEEDTEST FINE  "],
  },
  {
    id: 30,
    question: "QUERY to L2/TL and FOLLOW L2/TL QUERY GUIDANCE",
    answers: [
      "TICKET: Assign UNDER 'HIGH LATENCY IN A SINGLE DEVICE WITH GOOD RSSI' ",
    ],
  },
  {
    id: 31,
    question: "QUERY to L2/TL and FOLLOW L2/TL QUERY GUIDANCE",
    answers: [
      "TICKET: Assign UNDER 'HIGH LATENCY IN A SINGLE DEVICE WITH GOOD RSSI' ",
    ],
  },
  {
    id: 32,
    question: "QUERY to L2/TL and FOLLOW L2/TL QUERY GUIDANCE",
    answers: ["TICKET: Assign UNDER CHANNEL INTERFERENCE HEADER "],
  },
];
