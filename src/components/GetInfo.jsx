import React from "react";
import "./css/GetInfo.css";
import { useState } from "react";
import { Search, ChevronDown, Facebook } from "lucide-react";
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

function GetInfo() {
  const [count, setCount] = useState("");
  let [arrival, setArrival] = useState(false)
  let [depart, setDepart] = useState(false)
  var options = ["Tunis", "Turkey", "Paris"];
  return (
    <div className="info-parent">
      <div className="picker">
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          <p className="dest-font">Destination</p>
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown
                style={{ height: "15px", width: "15px", paddingLeft: "7px" }}
              />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          <p className="dest-font">Nationality</p>
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown
                style={{ height: "15px", width: "15px", paddingLeft: "7px" }}
              />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          <p className="dest-font">Check In Date</p>
          <div class="dropdown">
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
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          <p className="dest-font">Check out Date</p>
          <div class="dropdown">
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
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          <p className="dest-font">Room</p>
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown
                style={{ height: "15px", width: "15px", paddingLeft: "7px" }}
              />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          <p className="dest-font">Currency</p>
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown
                style={{ height: "15px", width: "15px", paddingLeft: "7px" }}
              />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div>
          <button
            style={{
              backgroundColor: "#5AE0A5",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
              borderRadius: "50px",
              borderStyle: "none",
              cursor: "pointer",
              color:'#0C6661',
            }}
          >
            <Search
              style={{ fontSize:'2rem' ,color: "#0C6661" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInfo;
