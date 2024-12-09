import { BsFiletypeSvg } from "react-icons/bs";
import { BsFiletypePng } from "react-icons/bs";
import { SiJpeg } from "react-icons/si";
import { RiFileGifFill } from "react-icons/ri";
import { FaImage } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { RiFolderMusicLine } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";

import "./style.css"

export const EnumType = {

   file: [
      { icon: <BsFiletypeSvg className="iconSize" />, label: "svg", type: "file" },
      { icon: <BsFiletypePng className="iconSize" />, label: "png", type: "file" },
      { icon: <SiJpeg className="iconSize" />, label: "jpeg File", type: "file" },
      { icon: <RiFileGifFill className="iconSize" />, label: "gif", type: "file" },
   ],
   folder: [
      { icon: <FaImage className="iconSize" />, label: "image", type: "folder" },
      { icon: <FaDownload  className="iconSize" />, label: "descktop", type: "folder" },
      { icon: <RiFolderMusicLine className="iconSize" />, label: "music", type: "folder" },
      { icon: <FaFolder className="iconSize" />, label: "folder", type: "folder" },

   ],
   program: [
      { icon: <FaChrome className="iconSize" />, label: "Chrome", type: "program" },
      { icon: <BsFillTerminalFill className="iconSize" />, label: "terminal", type: "program" },
      { icon: <FaWindows className="iconSize" />, label: "Windows", type: "program" },
      { icon: <FaFileWord className="iconSize" />, label: "word", type: "program" }

   ]

}