import { Typography } from "@material-tailwind/react";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="w-full md:h-80 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 items-center justify-items-center bg-gray-900 text-white">
      <h1 className="text-6xl m-4">JotaAI</h1>
      <Typography className="text-center m-4">
        Explore the power of computer vision with our models of image
        classification and discover a new level of understanding visual.
      </Typography>
      <div className="grid justify-items-center md:justify-items-start">
        <a href="https://github.com/JR-Camacho">
          <div className="flex items-center m-2">
            <Github className="h-6 w-6" />
            <p className="ml-2">JR-Camacho</p>
          </div>
        </a>
        <a href="mailto:josecamachoc0303@gmail.com">
          <div className="flex items-center m-2">
            <Envelope className="h-6 w-6" />
            <p className="ml-2">josecamachoc0303@gmail.com</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/josé-camacho/">
          <div className="flex items-center m-2">
            <Linkedin className="h-6 w-6" />
            <p className="ml-2">www.linkedin.com/in/josé-camacho</p>
          </div>
        </a>
      </div>
      <Typography className="italic m-6 md:mt-0">
        © 2023 JotaAI. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
