import axios from "axios";

const MovieList=axios.create({
    baseURL:"http://localhost:5000"
});

export default MovieList;