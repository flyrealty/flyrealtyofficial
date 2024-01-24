import React, { useEffect, useState } from "react";
import "../App.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [scrollPosition, setScrollPosition] = useState(0);

  const [projectsCount, setProjectsCount] = useState(0);
  const [realEstateCount, setRealEstateCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [professionalsCount, setProfessionalsCount] = useState(0);
  const [branchOfficesCount, setBranchOfficesCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update the count-up values based on the scroll position
    setProjectsCount(300);
    setRealEstateCount(1200);
    setCustomersCount(800);
    setProfessionalsCount(100);
    setBranchOfficesCount(2);
  }, [scrollPosition]);

  return (
    <div className={`hero ${inView ? "visible" : ""}`} ref={ref}>
      <div className="main-heading">
        <h1>Key Achievements</h1>
      </div>
      <div className="hero-display">
        <div className="hero-item">
          <CircularProgressbarWithChildren
            value={inView ? 100 : 0}
            styles={buildStyles({
              pathColor: "#ccff00",
              textColor: "#FF7E5F",
            })}
          >
            <CountUp
              className="hero-item-text"
              end={projectsCount}
              duration={1}
              style={{ fontSize: "3rem", fontWeight: "bold" }}
              formattingFn={(value) => `${value}+`}
            />
          </CircularProgressbarWithChildren>
          <h3>Projects Affiliated</h3>
        </div>

        <div className="hero-item-long">
          <CircularProgressbarWithChildren
            value={inView ? 100 : 0}
            styles={buildStyles({
              pathColor: "#ccff00",
              textColor: "#FF7E5F",
            })}
          >
            <CountUp
              className="hero-item-text"
              end={realEstateCount}
              duration={1}
              style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              formattingFn={(value) => `INR ${value}+`}
            />
          </CircularProgressbarWithChildren>
          <h3>Crore Worth of Real Estate Sold</h3>
        </div>

        <div className="hero-item">
          <CircularProgressbarWithChildren
            value={inView ? 100 : 0}
            styles={buildStyles({
              pathColor: "#ccff00",
              textColor: "#FF7E5F",
            })}
          >
            <CountUp
              className="hero-item-text"
              end={customersCount}
              duration={1}
              style={{ fontSize: "3rem", fontWeight: "bold" }}
              formattingFn={(value) => `${value}+`}
            />
          </CircularProgressbarWithChildren>
          <h3>Delighted Customers</h3>
        </div>

        <div className="hero-item">
          <CircularProgressbarWithChildren
            value={inView ? 100 : 0}
            styles={buildStyles({
              pathColor: "#ccff00",
              textColor: "#FF7E5F",
            })}
          >
            <CountUp
              className="hero-item-text"
              end={professionalsCount}
              duration={1}
              style={{ fontSize: "3rem", fontWeight: "bold" }}
              formattingFn={(value) => `${value}+`}
            />
          </CircularProgressbarWithChildren>
          <h3>Professionals</h3>
        </div>

        <div className="hero-item">
          <CircularProgressbarWithChildren
            value={inView ? 100 : 0}
            styles={buildStyles({
              pathColor: "#ccff00",
              textColor: "#FF7E5F",
            })}
          >
            <CountUp
              className="hero-item-text"
              end={branchOfficesCount}
              duration={2}
              style={{ fontSize: "3rem", fontWeight: "bold" }}
            />
          </CircularProgressbarWithChildren>
          <h3>Branch Offices</h3>
        </div>
      </div>
    </div>
  );
}
