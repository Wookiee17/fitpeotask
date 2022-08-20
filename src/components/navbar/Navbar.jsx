import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          {/* <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon /> */}
        </div>
        <div className="items">
          <div className="item">
         
            <img
              src="data:image/png;base64,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"
              alt=""
              className="avatar"
            />
          </div>
          
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
           
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
