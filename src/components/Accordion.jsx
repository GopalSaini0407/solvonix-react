import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JobModel from "./JobModel";

const accordionData = [
  {
    title: "Ui Designer",
    content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,",
  },
  {
    title: "Ui Designer",
    content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,",
  },
  {
    title: "Ui Designer",
    content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,",
  },
  {
    title: "Ui Designer",
    content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-2  rounded-lg shadow-md flex flex-col">
          <button
            className="w-full flex justify-between items-center p-4 font-medium rounded-lg"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            
            <div className="flex items-center">            
            <ChevronDown
              className={`transform transition-transform duration-300 relative z-0 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
            </div>
           
          </button>
          <span className="flex">
          <JobModel/>
          </span>
         


          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
            }`}
          >
            <p className="text-gray-800">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
