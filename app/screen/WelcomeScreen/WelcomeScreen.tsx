import React from "react";
import { View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

export default function WelcomeScreen() {
  const videoSource = require("../../../assets/videos/welcome.mp4");

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  return (
    <View className="z-0 h-full w-full">
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
