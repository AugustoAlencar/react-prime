import React, { useState, useEffect } from "react";

import { Container, Banner, Title, RateContainer, Rate } from "./styles";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  data: any;
  navigatePage: any;
}

function SearchItem(props: Props) {
  function detailMovie() {
    if (props.data.release_date === "") {
      alert("Filme ainda sem data");
      return;
    }

    props.navigatePage(props.data);
  }

  return (
    <Container activeOpacity={0.7} onPress={detailMovie}>
      {props.data?.poster_path ? (
        <Banner
          resizeMethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`,
          }}
        />
      ) : (
        <Banner
          resizeMethod="resize"
          source={require("../../assets/filme.jpeg")}
        />
      )}

      <Title>{props.data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{props.data.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  );
}

export default SearchItem;
