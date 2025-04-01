import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


const CounterBox = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      const duration = 2; // Duration for counting animation in seconds
      const incrementTime = 50; // Interval time for increment in ms

      const increment = () => {
        if (start < end) {
          start += Math.ceil(end / (duration * 1000) * incrementTime);
          setCount(start);
        } else {
          setCount(end); // Ensure it ends exactly at target
        }
      };

      const interval = setInterval(increment, incrementTime);
      return () => clearInterval(interval);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <span>{count}</span>
      </motion.div>
    </div>
  );
};

export function Counter(props) {
  const CounterData = [
    { img: "images/project_delivered.png", label: "Project Delivered" },
    { img: "images/active_clients.png", label: "Active Clients" },
    { img: "images/team_members.png", label: "Team Members" },
    { img: "images/experience.png", label: "Years of Experience" },
    { img: "images/40_technology.png", label: "Technologies Used" },
  ];

  return (
    <>
      {/* Counter Section */}
      <section className="counter-section max-w-[1200px] mx-auto flex md:justify-evenly pt-10 pb-20">
        {CounterData.map((item, index) => (
          <div
            key={index}
            className="counter-box border-2 border-dashed p-4 rounded-full text-center size-[175px] sm:size-[125px] lg:size-[175px]"
            style={{ borderColor: props.borderColor || "#EE3E77" }} // Directly inline style use karein
          >
            <div className="counter-img-box w-[54px] sm:w-[40px] lg:w-[54px]">
              <img src={item.img} alt={item.label}/>
            </div>
            <h3 className="text-[2.2rem] sm:text-[25px] lg:text-[2.2rem]">
            <CounterBox target={500} label="Projects Completed" />

            </h3>
            <p className="text-base sm:text-[14px] lg:text-base">{item.label}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Counter;
