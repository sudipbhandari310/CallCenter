import { useState } from "react";
import { ListGroup, Form, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import "./style.css";
import "./notes.css";
import { steps } from "./data/steps";
import { questions } from "./data/questions";



const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState([]);
  const [checked, setChecked] = useState(false);
  const [showRestart, setShowRestart] = useState(false);

  const handleQuestionTick = (message) => {
    const currentQuestion = questions[currentQuestionIndex];
    setProgress([...progress, { ...currentQuestion, message }]);

    if (message === " : Ping Not Fine") {
      setCurrentQuestionIndex(9); // Set the index to show question with id 10
    } else if (message === " : Ping Not Fine.") {
      setCurrentQuestionIndex(12);
    } else if (message === " : Range Fine i.e. &lt;=65dbm") {
      setCurrentQuestionIndex(10);
    } else if (message === " : CHANNEL INTERFERENCE SEEN") {
      setCurrentQuestionIndex(13);
    } else if (message === " : Domain Ping Not Fine") {
      setCurrentQuestionIndex(19);
      setShowRestart(true);
    } else if (message === " : CHANNEL INTERFERENCE NOT SEEN") {
      setCurrentQuestionIndex(14);
    } else if (message === " : Speedtest Not Fine") {
      setCurrentQuestionIndex(15);
    } else if (message === " : SINGLE DEVICE CONNECTION NOT FINE") {
      setCurrentQuestionIndex(18);
      setShowRestart(true);
    } else if (message === " : Range Not Fine") {
      setCurrentQuestionIndex(21);
      setShowRestart(true);
    } else if (message === " : SINGLE DEVICE CONNECTION AND SPEEDTEST FINE") {
      setCurrentQuestionIndex(17);
      setShowRestart(true);
    } else if (message === " : OMCI FINE") {
      setCurrentQuestionIndex(16);
    } else if (message === " : OMCI NOT FINE") {
      setCurrentQuestionIndex(22);
    } else if (message === " : Solved") {
      setCurrentQuestionIndex(23);
      setShowRestart(true);
    } else if (message === " : Solved.") {
      setCurrentQuestionIndex(24);
      setShowRestart(true);
    } else if (message === " : Solved..") {
      setCurrentQuestionIndex(25);
      setShowRestart(true);
    } else if (message === " : Solved...") {
      setCurrentQuestionIndex(26);
      setShowRestart(true);
    } else if (message === " : Solved....") {
      setCurrentQuestionIndex(27);
      setShowRestart(true);
    } else if (message === " : Not Solved") {
      setCurrentQuestionIndex(20);
      setShowRestart(true);
    } else if (message === " : Not Solved..") {
      setCurrentQuestionIndex(28);
      setShowRestart(true);
    } else if (message === " : Not Solved...") {
      setCurrentQuestionIndex(29);
      setShowRestart(true);
    } else if (message === " : Not Solved....") {
      setCurrentQuestionIndex(30);
      setShowRestart(true);
    } else if (message === " : Not Solved.....") {
      setCurrentQuestionIndex(31);
      setShowRestart(true);
    } else if (message === " : Not Solved.") {
      setShowRestart(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setChecked(false);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setProgress([]);
    setShowRestart(false);
    setChecked(false);
  };

  const handleBack1 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack2 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 2, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack3 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 4, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack4 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 9, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack5 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 7, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack6 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 15, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack7 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 12, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack8 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 13, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack9 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 14, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack10 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 6, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack11 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 18, 0));
    setProgress(progress.slice(0, -1));
  };
  const handleBack12 = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 16, 0));
    setProgress(progress.slice(0, -1));
  };

  const allStepsCompleted = currentQuestionIndex >= questions.length;

  return (
    <div className="container d-flex flex-column justify-content-center">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="p-2">
          {currentQuestionIndex < questions.length ? (
            <div>
              {/* <h4 className="fs-5 fw-bold">STEP {currentQuestionIndex + 1}</h4> */}
              <div className="question-section ">
                {questions[currentQuestionIndex].id === 6 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 6</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Ping Fine")}
                      >
                        Ping Fine
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn  "
                        onClick={() => handleQuestionTick(" : Ping Not Fine")}
                      >
                        Ping Not Fine
                      </button>
                    </div>

                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4  "
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 7 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 7</h4>
                      <p className="fs-6 mb-3 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className="btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Speedtest Fine")}
                      >
                        Speedtest Fine
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() =>
                          handleQuestionTick(" : Speedtest Not Fine")
                        }
                      >
                        Speedtest Not Fine
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 8 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 8</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() =>
                          handleQuestionTick(" : Domain Ping Fine")
                        }
                      >
                        Domain Ping Fine
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn"
                        onClick={() =>
                          handleQuestionTick(" : Domain Ping Not Fine")
                        }
                      >
                        Domain Ping Not Fine
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 9 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 9</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Solved")}
                      >
                        Solved
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() => handleQuestionTick(" : Not Solved")}
                      >
                        Not Solved
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 10 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 7</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() =>
                          handleQuestionTick(" : Range Fine i.e. &lt;=65dbm")
                        }
                      >
                        Range Fine i.e. &lt;=65dbm
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() => handleQuestionTick(" : Range Not Fine")}
                      >
                        Range Not Fine
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack3}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 11 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 8</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Ping Fine.")}
                      >
                        Ping Fine
                      </button>
                      <button
                        className="btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() => handleQuestionTick(" : Ping Not Fine.")}
                      >
                        Ping Not Fine
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 12 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 9</h4>
                      <p className="fs-6 mb-3 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Solved..")}
                      >
                        Solved
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() => handleQuestionTick(" : Not Solved...")}
                      >
                        Not Solved
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 13 ? (
                  <>
                    <div className="remainingStep1">
                      <h4 className="fs-5 fw-bold text-center">STEP 9</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() =>
                          handleQuestionTick(" : CHANNEL INTERFERENCE SEEN")
                        }
                      >
                        CHANNEL INTERFERENCE SEEN
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() =>
                          handleQuestionTick(" : CHANNEL INTERFERENCE NOT SEEN")
                        }
                      >
                        CHANNEL INTERFERENCE NOT SEEN
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack2}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 14 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 10</h4>
                      <p className="fs-6 mb-3 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className="btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Solved...")}
                      >
                        Solved
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() => handleQuestionTick(" : Not Solved.....")}
                      >
                        Not Solved
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 15 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 10</h4>
                      <p className="fs-6 mb-3 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Solved....")}
                      >
                        Solved
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() => handleQuestionTick(" : Not Solved....")}
                      >
                        Not Solved
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack2}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 18 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">STEP 10</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li
                            className="m-1 fs-6"
                            style={{ width: "500px" }}
                            key={index}
                          >
                            <span className="m-1 ">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "text-success fw-bold ml-1 test1"
                                  : "text-success fw-bold ml-1 test1"
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 16 ? (
                  <>
                    <div className="remainingStepResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 8</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : OMCI FINE")}
                      >
                        OMCI FINE
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn"
                        onClick={() => handleQuestionTick(" : OMCI NOT FINE")}
                      >
                        OMCI NOT FINE
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack4}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 19 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">STEP 10</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span className="m-1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "test1"
                                  : "text-success fw-bold ml-1 test1"
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack2}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 22 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1 adjustTest"
                    >
                      <h4 className="fs-5 fw-bold adjustTest2">STEP 8</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span className="m-1 arrowResponse">
                              <FaArrowRight
                                color="#05b328"
                                className="adjustTest"
                              />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "text-success test1 test3 fw-bold ml-1"
                                  : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack7}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 23 ? (
                  <>
                    <div className="solvedResponse1">
                      <h4 className="fs-5 fw-bold text-center">STEP 9</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <ul className="list-unstyled text-start">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6 " key={index}>
                            <span className="arrowTest ">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "test2"
                                  : "text-success fw-bolder test2"
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="demo1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() => handleQuestionTick(" : Solved.")}
                      >
                        SOLVED
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn "
                        onClick={() => handleQuestionTick(" : Not Solved..")}
                      >
                        NOT SOLVED
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack5}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 21 ? (
                  <>
                    <label className="fw-bold text-start notSolvedResponse">
                      <h4
                        className="fs-5 fw-bold"
                        style={{ marginLeft: "10rem" }}
                      >
                        Not Solved
                      </h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start lastAnswerResponse">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li
                            className="m-1 fs-6 "
                            style={{ width: "600px" }}
                            key={index}
                          >
                            <span className="m-1 ">
                              <FaArrowRight
                                color="#05b328"
                                className="arrowResponse"
                              />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "lastAnswerResponse"
                                  : "text-success fw-bold ml-1 lastAnswerResponse"
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack7}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 30 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Not Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span className="m-1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "text-success test1 fw-bold ml-1"
                                  : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack11}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 31 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Not Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span className="m-1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "text-success test1 fw-bold ml-1"
                                  : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack12}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 32 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start test4  solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Not Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span className="m-1 SolvedAnsResp1 test5">
                              <FaArrowRight color="#05b328" className="test5" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "text-success test1 test6 fw-bold"
                                  : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack11}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 29 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Not Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span className="m-1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "text-success test1 fw-bold ml-1"
                                  : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack10}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 24 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span className="m-1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0 ? "" : "text-success fw-bold ml-1"
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack6}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 25 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6 " key={index}>
                            <span className="m-1 ">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0 ? "text-success fw-bold ml-1" : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack2}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 26 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6 solvedResponse1" key={index}>
                            <span className="m-1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0 ? "text-success fw-bold ml-1 " : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack9}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 27 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold ">Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 SolvedAnsResp1" key={index}>
                            <span className="m-1 solvedAnsResp1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? ""
                                  : "text-success fw-bold ml-1 solvedAnsResp1"
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack8}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 28 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">Solved</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 SolvedAnsResp1" key={index}>
                            <span className="m-1 SolvedAnsResp1">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "text-success fw-bold ml-1 solvedAnsResp1"
                                  : ""
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack8}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 20 ? (
                  <>
                    <label
                      style={{ width: "500px" }}
                      className="fw-bold text-start solvedResponse1"
                    >
                      <h4 className="fs-5 fw-bold">STEP 9</h4>
                      <Form
                        type="checkbox"
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                        onChange={() => handleQuestionTick("")}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <ul className="list-unstyled text-start SolvedAnsResp1">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li
                            className="m-1 fs-6 SolvedAnsResp1"
                            style={{ width: "500px" }}
                            key={index}
                          >
                            <span className="m-1 arrowReasponse">
                              <FaArrowRight color="#05b328" />
                            </span>
                            <span
                              className={
                                index === 0
                                  ? "test1"
                                  : "text-success fw-bold ml-1 answer1 test1"
                              }
                            >
                              {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack7}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : questions[currentQuestionIndex].id === 17 ? (
                  <>
                    <div className="remainingStepResponse1 stepTest1">
                      <h4 className="fs-5 fw-bold text-center">STEP 9</h4>
                      <p className="fs-6 fw-bold text-center">
                        {questions[currentQuestionIndex].question}
                      </p>
                    </div>
                    <div className="demo1 stepTest1">
                      <button
                        className=" btn btn-white border mb-3 border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1"
                        onClick={() =>
                          handleQuestionTick(
                            " : SINGLE DEVICE CONNECTION AND SPEEDTEST FINE"
                          )
                        }
                      >
                        SINGLE DEVICE CONNECTION AND SPEEDTEST FINE
                      </button>
                      <button
                        className=" btn btn-white border border-shadow shadow-lg rounded-4 fs-6 me-3 remainingBtnResponse1 notfineBtn"
                        onClick={() =>
                          handleQuestionTick(
                            " : SINGLE DEVICE CONNECTION NOT FINE"
                          )
                        }
                      >
                        SINGLE DEVICE CONNECTION NOT FINE
                      </button>
                    </div>
                    <div className="d-flex justify-content-center backResponse1">
                      <button
                        className="btn btn-outline-primary align-items-center border border-shadow shadow-lg rounded-4"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                    <ul className="list-unstyled">
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <li className="m-1 fs-6" key={index}>
                            <span
                              className={
                                index === 0 ? "" : "text-success fw-bold ml-1"
                              }
                            >
                              <FaArrowRight color="#05b328" /> {answer}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                ) : (
                  <>
                    <label className="fw-bold text-center text-md-start mb-0 questionResponsive1">
                      <h4 className="fs-5 fw-bold text-center text-start mb-0 stepResponsive1">
                        STEP {currentQuestionIndex + 1}
                      </h4>
                      <Form.Check
                        type="checkbox"
                        style={{ opacity: "0" }}
                        // label={questions[currentQuestionIndex].question}
                        checked={checked}
                      />

                      {questions[currentQuestionIndex].question}
                    </label>
                    <div className="">
                      <ul className="list-unstyled text-center answer1">
                        {questions[currentQuestionIndex].answers.map(
                          (answer, index) => (
                            <li className=" fs-6 mt-2 mb-0 answer1" key={index}>
                              <span
                                className={
                                  index === 0 ? "" : "text-success fw-bold ml-1"
                                }
                              >
                                <button
                                  className="btn  border  rounded-4 fs-6 text-center answer1"
                                  onClick={() =>
                                    handleQuestionTick(" : Not Solved.")
                                  }
                                >
                                  {answer}
                                </button>
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="btnResponse1">
                      <button
                        className="btn btn-outline-success btnResponse1"
                        onClick={() => handleQuestionTick("")}
                      >
                        {questions[currentQuestionIndex].question2}
                      </button>
                      <button
                        className="btn btn-outline-primary align-items-center border backResponse1"
                        onClick={handleBack1}
                      >
                        Back
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div>
              <h4 className="fs-5">All steps completed</h4>
            </div>
          )}
        </Col>

        <Col xs={4} className="p-2">
          <div
            className={`position-fixed top-0 end-0 text-center justify-content-center m-5 completed d-flex ${
              allStepsCompleted ? "completed" : ""
            }`}
            style={{
              marginTop: "50px",
              marginRight: "20px",
              width: "450px",
              height: "20px",
              fontSize: "14px",
            }}
          >
            <div className="line1"></div>
            <ListGroup className="progressResponse progressForSmall">
              <h4 className="fs-6 text-center text-md-start">PROGRESS</h4>
              {progress.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="fs-7 text-start progressItemResponse"
                  style={{
                    border: "none",
                    padding: "10px",
                  }}
                >
                  <div className="itemResponse">
                    <strong className="d-flex align-items-center progressItemResponse  ">
                      <i className="">
                        <FcApproval size={20} />
                      </i>
                      {item.question}
                    </strong>
                    {item.message}
                  </div>
                </ListGroup.Item>
              ))}
              {showRestart && (
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-danger rounded-5 fs-6"
                    onClick={handleRestart}
                  >
                    Close & Start Now
                  </button>
                </div>
              )}
            </ListGroup>
          </div>
        </Col>
      </Row>

      <div className="notes">
        <h3 className="noteTitle">Notes:</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: steps[currentQuestionIndex]?.content,
          }}
        ></div>
      </div>
    </div>
  );
};

export default App;
