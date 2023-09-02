import React, { useState, useEffect } from "react";
import { Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Camera from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Dialog from "react-native-dialog";
import styled from "styled-components";

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export default function AvatarPicker({ uri, onAvatarChange }) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [avatarUri, setAvatarUri] = useState(uri);

  useEffect(() => {
    setAvatarUri(uri);
  }, [uri]);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchCameraAsync();
      if (!result.canceled && result.assets) {
        const newUri = result.assets[0].uri;
        setAvatarUri(newUri);
        onAvatarChange(result.assets[0].uri);
      }
    }
    setDialogVisible(false);
  };

  const handleLibrary = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled && result.assets) {
        setAvatarUri(result.assets[0].uri);
        onAvatarChange(result.assets[0].uri);
      }
    }
    setDialogVisible(false);
  };

  return (
    <Pressable onPress={showDialog}>
      <Avatar
        source={
          avatarUri ? { uri: avatarUri } : require("../images/avatar.png")
        }
      />

      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Select to choose from</Dialog.Title>
        <Dialog.Button label="Camera" onPress={handleCamera} />
        <Dialog.Button label="Photo Library" onPress={handleLibrary} />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
      </Dialog.Container>
    </Pressable>
  );
}
