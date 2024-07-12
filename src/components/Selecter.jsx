import React, { useState } from "react";
import "./css/Selecter.css";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const newTheme = (theme) =>
  createTheme({
    ...theme,
    components: {
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            color: "#C7DCDB",
            borderRadius: "2px",
            borderWidth: "0px",
            borderColor: "transparent",
            border: "0px hidden",
            backgroundColor: "#fff",
          },
        },
      },
    },
  });

function Selecter() {
  let [Room, setRoom] = useState([{ adults: 0, kids: 0 }]);
  let [arrival, setArrival] = useState(false)
  let [depart, setDepart] = useState(false)
  const addRoom = () => {
    const newRoom = { adults: 0, kids: 0 };
    setRoom([...Room, newRoom]);
  };
  const removeRoom = (index) => {
    if (Room.length > 1) {
      const updatedRoom = [...Room];
      updatedRoom.splice(index, 1);
      setRoom(updatedRoom);
    }
  };
  return (
    <div className="selecter-parent">
      <div className="selecter-container">
        <p className="selecter-header">Prices and Reservation</p>
        <div className="selecter-forms">
          <div className="dropdown">
            <div className="datee">
              <div>Arrival</div>
              <button style={{all:'unset', cursor:'pointer', fontFamily: "calibri-nrml"}} onClick={() => setArrival(!arrival)}>Pick a date</button>
              <div style={{ fontFamily: "calibri-nrml", opacity:'0', height:'0', width:'0' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <ThemeProvider theme={newTheme}>
                      <DesktopDatePicker open={arrival}/>
                    </ThemeProvider>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>

          </div>
          <div className="dropdown">
            <div className="datee">
              <div>Departures</div>
              <button style={{all:'unset', cursor:'pointer', fontFamily: "calibri-nrml"}} onClick={() => setDepart(!depart)}>Pick a date</button>
              <div style={{ fontFamily: "calibri-nrml", opacity:'0', height:'0', width:'0' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <ThemeProvider theme={newTheme}>
                      <DesktopDatePicker open={depart}/>
                    </ThemeProvider>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="room">
              <div>Room and Occupancy</div>
              <div style={{ fontFamily: "calibri-nrml" }}>1 Adults, 2 Kids</div>
            </div>
            <div className="dropdown-content room-selecter">
              <div className="sub-header">
                selection of rooms and passengers
                <div className="line"></div>
              </div>
              <ul>
                {Room.map((_, index) => (
                  <li key={index}>
                    <div className="forms-container">
                      <span>Room {index + 1}</span>
                      <div className="forms">
                        <div className="form-style">
                          <span>Adult</span>
                          <form className="form" action="">
                            0
                          </form>
                        </div>
                        <div className="form-style">
                          <span>Kids</span>
                          <form className="form" action="">
                            0
                          </form>
                        </div>
                      </div>
                    </div>
                    {index === Room.length - 1 ? null : (
                      <div className="line"></div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="dashed-line"></div>
              <div>
                <div className="sub-footer">
                  <button className="button-div" onClick={() => addRoom()}>
                    <FaCirclePlus style={{marginRight:'1rem'}}/>
                    add Room
                  </button>
                  {Room.length > 1 && (
                    <button className="button-div" onClick={() => removeRoom()}>
                      <FaCircleMinus style={{marginRight:'1rem'}}/>
                      Delete Room
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown-button">
            <button className="dropdown-buttons">Calculate the price</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selecter;
