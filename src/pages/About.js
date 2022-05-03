import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const BootstrapLogo = require("../assets/logos/BootstrapLogo.png")
const HtmlLogo = require("../assets/logos/HtmlLogo.png")
const CssLogo = require("../assets/logos/CssLogo.png")
const CsharpLogo = require("../assets/logos/CsharpLogo.png")

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
          Hello, I am Kerem Ersoy.I am a Computer Engineering student at Kırıkkale University.
            <br></br> <br></br>
          I follow the software industry and new technologies. I did not choose a single field, but I browsed many fields. I take C# lessons at school and I am trying to be good at object oriented programming. I have an introductory knowledge of C# Windows Form. I also studied arduino when I was in high school. I learned HTML, CSS, Bootstrap. I am currently trying to learn JavaScript and its frameworks. 
          </code>
          <br />
          <br />
          <code>Technologies i work with:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={HtmlLogo}
                alt="Html Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>HTML</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={CssLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>CSS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={BootstrapLogo}
                alt="Bootstrap Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Bootstrap</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={CsharpLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>C#</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
