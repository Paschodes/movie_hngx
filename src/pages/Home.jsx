import React, { useEffect, useState } from 'react'
import './Home.css'
import tomato from './../assets/tomato.svg'
import idmb from './../assets/idmb.svg'
import Footer from '../components/Footer'
import axios from 'axios'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

const API_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const API_KEY = 'dd012333366f999f14692bc1f59e0a0c';
// const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key={Key}&query={the+avengers}'

const Home = () => {
    const [movielist, setMovielist] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)


    const getMovies = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${API_URL}?api_key=${API_KEY}`
            );
            setMovielist(response.data.results);
            setLoading(false);
            setError(null)
            
        } catch (error) {
            setError(error)
            setMovielist(null)
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getMovies();
      },[])
    
    
    // const movieListLimit = movielist.slice(0, 10);
    
  return (
    <div className='home_container'>
        {loading && <Spinner />}
        {error && <h3>{`There is a problem fetching your data - ${error}`}</h3>}
        <Header movies={movielist}/>

        <div className='home_content'>
            <h1>Feature Movies</h1>

            <div className='home_content_divs'>
                {movielist?.slice(0, 10).map((data) => {
                    return (
                        <Link to={`/detail/${data.id}`} data-testid="movie-card" key={data.id} className='home_card'>
                            <img src={`https://image.tmdb.org/t/p/original${data && data.poster_path}`} alt="poster" style={{width: '200px', height: '320px'}}  data-testid='movie-poster' />
                            <div className='header_rate home_country'>
                                <span>{data.original_language}</span>
                                <span data-testid='movie-release-date'>{data.release_date}</span>
                            </div>
                            <h3 data-testid='movie-title' className='home_data_title'>{data.title}</h3>
                            <div className='header_rating_div'>
                                <div className='header_rate'>
                                    <img src={idmb} alt="idmb" />
                                    <span>{data.rating}</span>
                                </div>
                                <div className='header_rate'>
                                    <img src={tomato} alt="tomato" />
                                    <span>{data.vote_average}</span>
                                </div>
                            </div>
                            <p className='home_data_p'>{data ? data.overview.slice(0, 118) + "..." : ""}</p>
                        </Link>
                    )
                })}
            </div>
        </div>

        <div className='home_footer'>
            <Footer />
        </div>
    </div>
  )
}

export default Home;