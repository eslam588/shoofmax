
import { useState ,  createContext , useEffect} from 'react';
 export const MovieContext = createContext();

 export const MovieState = ({children}) => {
    const [isLoading , setIsLoading] = useState(false);
    const [hiddenMenu , setHiddenMenu] = useState(true);
    const [activeLink , setActiveLink] = useState("Popular");
    const [popularMovies, setPopularMovies] = useState([]);
    const [search , setSearch] = useState("");
    const [currentPage , setCurrentPage] = useState(1);
    const [movies , setMovies] = useState([]);
    const [showPagination , setShowPagination] = useState(true);
    


    const API_KEY = "9d4fbae6d45a1f406cc115a66a4de03d";

    const getPopularMovies = async () => {
        const popularMoviesResponse = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`
        );
        const popularMoviesData = await popularMoviesResponse.json();
        setPopularMovies(popularMoviesData);
    }

    const getMovies = async () => {
        const response =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    const data = await response.json();
    if(search.trim() === "") {
        setMovies(data);
    }
  };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (search.trim() === "") 
        {
            return;
        }
        const searchResponse = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
          );
        const searchData = await searchResponse.json();
        setMovies(searchData);
        setShowPagination(false);
    }

    const newPage = (direction) => {
        if(direction === 'next'){
            setCurrentPage((prevCurrent) => prevCurrent + 1);
            setIsLoading(true);
        }
        else if (direction === 'previous' && currentPage !== 1) {
            setCurrentPage((prevCurrent) => prevCurrent - 1);
        }
    }

    useEffect(() => {
        getPopularMovies();
    },[]);

    useEffect(() => {
        if(search.trim() === ""){
            setShowPagination(true);
        }
        getMovies();
    },[search , currentPage]);

    
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1300);
        return () => clearTimeout(loadingTimeout);
    } , [movies, currentPage]);

     return (
        <MovieContext.Provider value={{hiddenMenu , setHiddenMenu ,
                                      activeLink , setActiveLink , 
                                      popularMovies , setPopularMovies,
                                      search , setSearch,
                                      currentPage , setCurrentPage ,
                                      movies, setMovies,
                                      getPopularMovies ,
                                      getMovies ,
                                      handleSearch,
                                      isLoading , setIsLoading ,
                                      showPagination , setShowPagination,
                                      newPage 
                                      }} >
               {children}       
        </MovieContext.Provider>
     );

 }
 