import React from "react";
import { Container, Name } from "./styles";

interface Props {
  data: any;
}

// function Genres({props: Props}) {
function Genres(props: Props) {
  return (
    <Container>
      <Name>{props.data.name}</Name>
    </Container>
  );
}

export default Genres;
