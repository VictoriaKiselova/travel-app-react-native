import React from "react";
import { View, Dimensions } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

export default function WelcomeScreen() {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const videoSource = require("../../../assets/videos/welcome.mp4");

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  return (
    <View
      className="absolute top-0 left-0"
      style={{ height: windowHeight, width: windowWidth, zIndex: 10 }}>
      <VideoView
        style={{ flex: 1, width: "100%", height: "100%" }}
        player={player}
        contentFit="cover"
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
      />
    </View>
  );
}
