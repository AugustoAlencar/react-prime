import React from "react";
import { View, Text } from "react-native";
import { BackButton, Name } from "./styles";

import { Feather } from "@expo/vector-icons";
import WebView from "react-native-webview";

interface Props {
  link: string;
  title: string;
  closeModal: any;
}

function ModalLink(props: Props) {
  return (
    <>
      <BackButton onPress={props.closeModal}>
        <Feather name="x" size={35} color="#FFF" />
        <Name numberOfLines={1}>{props.title}</Name>
      </BackButton>

      <WebView source={{ uri: props.link }} />
    </>
  );
}

export default ModalLink;
