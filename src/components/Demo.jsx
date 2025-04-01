import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, label }) => {
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
        <span className="text-5xl font-bold text-blue-600">{count}</span>
      </motion.div>
      <p className="text-lg font-medium text-gray-700 mt-2">{label}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <div className="bg-gray-100 py-20">
      <h2 className="text-center text-3xl font-bold mb-10">Our Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        <Counter target={500} label="Projects Completed" />
        <Counter target={200} label="Happy Clients" />
        <Counter target={50} label="Awards Won" />
        <Counter target={100} label="Team Members" />
      </div>
    </div>
  );
}
