import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, ListMovies } from "./styles";
import API, { key } from "../../services/app";
import SearchItem from "../../components/SearchItem";

function Search() {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie]: Array<any> = useState([]);
  const [loading, setLoading]: Array<any> = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response: any = await API.get("search/movie", {
        params: {
          api_key: key,
          language: "pt-BR",
          query: route.params?.name,
          page: 1,
        },
      }).catch((err) => {
        console.log(err);
      });

      if (isActive) {
        setMovie(response.data.results);
        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  function navigateDetailsPage(movie: any) {
    navigation.navigate("Detail", { id: movie.id });
  }

  if (loading) {
    return <Container></Container>;
  }

  return (
    <Container>
      <ListMovies
        data={movie}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }) => (
          <SearchItem
            data={item}
            navigatePage={() => navigateDetailsPage(item)}
          />
        )}
      />
    </Container>
  );
}

export default Search;
