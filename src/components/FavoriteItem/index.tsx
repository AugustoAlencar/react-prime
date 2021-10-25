import React, { useState, useEffect } from "react";

import {
  Container,
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton,
} from "./styles";

import { Ionicons, Feather } from "@expo/vector-icons";

interface Props {
  data: any;
  navigatePage: any;
  deleteMovie: any;
}

function FavoriteItem(props: Props) {
  return (
    <Container>
      <Title size={24}>{props.data.title}</Title>
      <Title size={24}>{props.data.title}</Title>
      <Title size={24}>{props.data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{props.data.vote_average}/10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton onPress={() => props.navigatePage(props.data)}>
          <Title size={14}>Ver detalhes</Title>
        </DetailButton>

        <DeleteButton onPress={() => props.deleteMovie(props.data.id)}>
          <Feather name="trash" size={24} color="#FFF" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
}

export default FavoriteItem;
