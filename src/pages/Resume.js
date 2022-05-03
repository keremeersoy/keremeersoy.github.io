import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Kırıkkale University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor of Computer Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2021 - Present
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Freelance</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
               Turkey{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• May 2022 - Present</code>
            <br />
            <code className="text-sm">
              <br />• I do website design and development as a freelance.
              <br />• I can develop desktop applications using C# Windows Form.
              <br />• I am still learning smart contract technology.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Planning   - I can make a suitable planning for the project I will do.
              <br />• Team Work  - I can adapt to the people I work with. 
              <br />• Leadership - I have the skills to lead a group and I enjoy it.
              <br />• Punctual   - The delivery date of the project is important to me and I will deliver it on time.
              
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
