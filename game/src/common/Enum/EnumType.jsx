import { BsFiletypeSvg } from "react-icons/bs"
import { SiJpeg } from "react-icons/si"
import { BiSolidFileTxt } from "react-icons/bi"
import { FaFilePdf } from "react-icons/fa"
import { FaImage } from "react-icons/fa6"
import { MdDownload } from "react-icons/md"
import { RiFolderMusicLine } from "react-icons/ri"
import { MdFolderZip } from "react-icons/md"
import { FaChrome } from "react-icons/fa"
import { BsFillTerminalFill } from "react-icons/bs"
import { FaWindows } from "react-icons/fa"
import { FaFileWord } from "react-icons/fa"

import "./style.css"

export const EnumType = {

   file: [
      { icon: <BsFiletypeSvg className="iconSize" />, label: "svg", type: "file" },
      { icon: <SiJpeg className="iconSize" />, label: "jpeg", type: "file" },
      { icon: <BiSolidFileTxt className="iconSize" />, label: "txt File", type: "file" },
      { icon: <FaFilePdf className="iconSize" />, label: "pdf", type: "file" },
   ],
   folder: [
      { icon: <FaImage className="iconSize" />, label: "image", type: "folder" },
      { icon: <MdDownload className="iconSize" />, label: "download", type: "folder" },
      { icon: <RiFolderMusicLine className="iconSize" />, label: "music", type: "folder" },
      { icon: <MdFolderZip className="iconSize" />, label: "zip", type: "folder" },

   ],
   program: [
      { icon: <FaChrome className="iconSize" />, label: "Chrome", type: "program" },
      { icon: <BsFillTerminalFill className="iconSize" />, label: "terminal", type: "program" },
      { icon: <FaWindows className="iconSize" />, label: "Windows", type: "program" },
      { icon: <FaFileWord className="iconSize" />, label: "word", type: "program" }

   ]

}