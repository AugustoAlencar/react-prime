import React from "react";
import { Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Container, MenuButton, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
}

function Header(props: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={36} color="#fff" />
      </MenuButton>

      <Title>{props.title}</Title>
    </Container>
  );
}

export default Header;
