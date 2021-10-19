import React from "react";
import { View, Text } from "react-native";
import { Container, BannerItem, Title, RateContainer, Rate } from "./styles";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  data: any;
  navigatePage: any;
  // navigatePage: (movie: any) => {};
}

function SliderItem(props: Props) {
  return (
    <Container
      activeOpacity={0.7}
      onPress={() => props.navigatePage(props.data)}
    >
      <BannerItem
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${props.data.poster_path}`,
        }}
      />

      <Title numberOfLines={1}>{props.data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{props.data.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  );
}

export default SliderItem;
