import React from "react";
import "./styles.css";

import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThumbContainer } from "./components/thumb-container";

import fireIcon from "./icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "./icons/iconfinder_ic_home_48px_3669170.png";
import playlist from "./icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "./icons/iconfinder_ic_subscriptions_48px_3669213.png";
import logo from "./icons/iconfinder_youtube_294703.png";
import createVideo from "./icons/createVideo.png";
import youtubeApps from "./icons/youtubeApps.png";
import notifications from "./icons/notifications.png";
import video1 from "./images/video1.jpg";
import video2 from "./images/video2.jpg";
import video3 from "./images/video3.jpg";
import video4 from "./images/video4.jpg";
import video5 from "./images/video5.jpg";
import video6 from "./images/video6.jpg";
import video7 from "./images/video7.jpg";
import video8 from "./images/video8.jpg";

const navbarIcons = [
  {
    id: 1,
    icon: createVideo,
    alt: "create video"
  },
  {
    id: 2,
    icon: youtubeApps,
    alt: "youtube apps"
  },
  {
    id: 3,
    icon: notifications,
    alt: "notifications"
  }
];

const menuItems = [
  {
    id: 4,
    icon: homeIcon,
    title: "Principal"
  },
  {
    id: 5,
    icon: fireIcon,
    title: "Tendencias"
  },
  {
    id: 6,
    icon: subscriptionsIcon,
    title: "Suscripciones"
  },
  {
    id: 7,
    icon: playlist,
    title: "Biblioteca"
  }
];

const thumbnails = [
  {
    id: 8,
    video: video1,
    alt: "video1"
  },
  {
    id: 9,
    video: video2,
    alt: "video2"
  },
  {
    id: 10,
    video: video3,
    alt: "video3"
  },
  {
    id: 11,
    video: video4,
    alt: "video4"
  },
  {
    id: 12,
    video: video5,
    alt: "video5"
  },
  {
    id: 13,
    video: video6,
    alt: "video6"
  },
  {
    id: 14,
    video: video7,
    alt: "video7"
  },
  {
    id: 15,
    video: video8,
    alt: "video8"
  }
];

function App() {
  return (
    <div className="App">
      <Sidebar icons={menuItems} />
      <Navbar logo={logo} menuIcons={navbarIcons} />
      <ThumbContainer thumbnails={thumbnails} />
    </div>
  );
}

export default App;
