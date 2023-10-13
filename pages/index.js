import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Button from "@/components/Button";
import { Animated } from "react-animated-css";

function App() {
  const [video, toggleVideo] = useState("0");
  console.log(video);
  return (
    <div p={0} style={{ width: "100%", bg: "black" }} m={0}>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div
          style={{
            background: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.94),
              rgba(0, 0, 0, 0.74)
            ),url(https://user-images.githubusercontent.com/39828164/258882277-368eac86-3c39-4842-be2c-1436a6db6f07.png)`,
            backgroundSize: "cover",
            color: "white",
            fontSize: "1.3rem!important",
            width: "100%",
            backgroundPosition: "center",
            height: "100vh",
            display: video != "1" ? "block" : "none",
          }}
        >
          <div
            py={4}
            pt={6}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
              height: "100vh",
            }}
          >
            <img
              src="https://cloud-nvwhh1k8y-hack-club-bot.vercel.app/0outernet_sun_sticker.webp"
              style={{ maxWidth: "350px" }}
            />
            <div style={{ maxWidth: "500px", marginTop: "28px" }}>
              Every summer, Hack Clubbers do something special. In 2023 we
              ventured out to the Northeast Kingdom of Vermont for Outernet — a
              four-day experimental coding/camping trip. Together, we turned a
              semi-abandoned campsite into a bustling hacker oasis.
            </div>
            <Button
              backgroundColor="white"
              textColor="var(--orange)"
              onClick={() => toggleVideo("1")}
              style={{
                fontSize: "min(4vw, 1.2em)",
                marginTop: "24px",
                marginBottom: "8px",
                fontFamily: "John Muir",
              }}
            >
              {video != "0.1" ? "Watch" : "Resume"} the documentary
            </Button>
            <Button
              backgroundColor="white"
              textColor="var(--navy)"
              link="https://github.com/hackclub/outernet"
              style={{
                fontSize: "min(5vw, 1.2em)",
                marginTop: "8px",
                marginBottom: "56px",
                fontFamily: "John Muir",
              }}
            >
              Explore The GitHub
            </Button>
          </div>
        </div>
      </Animated>
      <div
        onClick={() => toggleVideo("0.1")}
        style={{ display: video == "1" ? "block" : "none" }}
      >
        <ReactPlayer
          width="100vw"
          height="100vh"
          playing={video == "1" ? true : false}
          style={{ pointerEvents: "none" }}
          url={`https://www.youtube.com/watch?v=O1s5HqSqKi0`}
          onClick={() => toggleVideo("0.1")}
          onEnded={() => toggleVideo("0")}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
