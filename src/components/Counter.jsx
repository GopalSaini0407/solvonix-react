import React from "react";

export function Counter(props) {
  const CounterData = [
    { img: "images/project_delivered.png", label: "Project Delivered" },
    { img: "images/active_clients.png", label: "Active Clients" },
    { img: "images/team_members.png", label: "Team Members" },
    { img: "images/experience.png", label: "Years of Experience" },
    { img: "images/40_technology.png", label: "Technologies Used" },
  ];

  console.log(props.borderColor); // Debugging ke liye check karein

  return (
    <>
      {/* Counter Section */}
      <section className="counter-section max-w-[1200px] mx-auto flex md:justify-evenly pt-10 pb-20">
        {CounterData.map((item, index) => (
          <div
            key={index}
            className="counter-box border-2 border-dashed p-4 rounded-full text-center"
            style={{ borderColor: props.borderColor || "#EE3E77" }} // Directly inline style use karein
          >
            <div className="counter-img-box">
              <img src={item.img} alt={item.label} />
            </div>
            <h3>150</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Counter;
