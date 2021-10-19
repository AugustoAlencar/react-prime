import AsyncStorage from "@react-native-async-storage/async-storage";

// buscar os filmes salvos
export async function getMoviesSave(key: string) {
    const myMovies = await AsyncStorage.getItem(key);

    let moviesSave = JSON.parse(myMovies) || [];

    return moviesSave
}

// salvar um filme
export async function saveMovie(key: string, newMovie: any) {
    let moviesStorage = await getMoviesSave(key)

    // se tiver algum filme salvo com esse id, ou duplicado precisamos ignorar
    const hasMovie = moviesStorage.some((item: any) => item.id === newMovie.id)

    if (hasMovie) {
        console.log("esse filme ja exite")
        return
    }

    moviesStorage.push(newMovie)

    await AsyncStorage.setItem(key, JSON.stringify(moviesStorage))
}

// deletar um filme
export async function deleteMovie(id: string) {
    let moviesStorage = await getMoviesSave('@primereact')

    let myMovies = moviesStorage.filter((item: any) => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies))
    console.log("filme deletado com sucesso")

    return myMovies
}

// filtar filmes salvos
export async function hasMovie(movie: any) {
    let moviesStorage = await getMoviesSave('@primereact')
    
    const hasMovie = moviesStorage.find((item: any) => item.id === movie.id )

    if (hasMovie) {
        return true
    }

    return false;
}
