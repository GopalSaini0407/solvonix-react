import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterBox = ({ target }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      const duration = 2000; // 2 seconds in milliseconds
      const incrementTime = 50; // Interval in ms
      const step = Math.ceil(end / (duration / incrementTime));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, incrementTime);

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

export function Counter({ borderColor }) {
  const CounterData = [
    { img: "images/project_delivered.png", label: "Projects Delivered", target: 500 },
    { img: "images/active_clients.png", label: "Active Clients", target: 120 },
    { img: "images/team_members.png", label: "Team Members", target: 50 },
    { img: "images/experience.png", label: "Years of Experience", target: 10 },
    { img: "images/40_technology.png", label: "Technologies Used", target: 40 },
  ];

  return (
    <section className="counter-section max-w-[1200px] mx-auto flex md:justify-evenly pt-10 pb-20">
      {CounterData.map((item, index) => (
        <div
          key={index}
          className="counter-box border-2 border-dashed p-4 rounded-full text-center size-[175px] sm:size-[125px] lg:size-[175px]"
          style={{ borderColor: borderColor || "#EE3E77" }}
        >
          <div className="counter-img-box w-[54px] sm:w-[40px] lg:w-[54px]">
            <img src={item.img} alt={item.label} />
          </div>
          <h3 className="text-[2.2rem] sm:text-[25px] lg:text-[2.2rem]">
            <CounterBox target={item.target} />
          </h3>
          <p className="text-base sm:text-[14px] lg:text-base">{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Counter;
