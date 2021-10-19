import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container, ListMovies } from "./styles";
import Header from "../../components/Header";
import { deleteMovie, getMoviesSave } from "../../utils/storage";
import FavoriteItem from "../../components/FavoriteItem";
import { useNavigation, useIsFocused } from "@react-navigation/native";

function Movies() {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // sempre que entrar na tela ativa como true, e quando sai troca para false
  const [movies, setMovies]: Array<any> = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMoviesSave("@primereact");

      if (isActive) {
        setMovies(result);
      }
    }

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  async function handlerDelete(id: string) {
    const result = await deleteMovie(id);
    setMovies(result);
  }

  async function navigationPageDetails(item: any) {
    navigation.navigate("Detail", { id: item.id });
  }

  return (
    <Container>
      <Header title="Meus Filmes" />

      <ListMovies
        data={movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }) => (
          <FavoriteItem
            data={item}
            deleteMovie={handlerDelete}
            navigatePage={() => navigationPageDetails(item)}
          />
        )}
      />
    </Container>
  );
}

export default Movies;
