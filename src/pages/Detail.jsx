import React, { useEffect, useState } from 'react'
import './Detail.css'
import { AiOutlineHome, AiOutlineRollback, AiOutlineUnorderedList, AiFillStar } from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'
import { IoTicketSharp } from 'react-icons/io5'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'



const API_KEY = 'dd012333366f999f14692bc1f59e0a0c';
const API_URL = 'https://api.themoviedb.org/3/movie/';

const Detail = () => {
    const [movieDetail, setMovieDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const { id } = useParams();
    
    const convertDate = (date) => {
        if (!date) {
          return "";
        }
        const releaseDate = new Date(date).toISOString();
        return releaseDate;
    };

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
          try {
            const response = await axios.get(
                `${API_URL}/${id}`,
                {
                    params: {
                        api_key: API_KEY
                    },
                }
            );
            setMovieDetail(response.data);
            setLoading(false)
            setError(null)
          } catch (error) {
            setError(error)
            setMovieDetail(null)
            console.error("Error fetching movie details:", error);
          }
        };
        getData();
      }, [id]);
      
  return (
    <div>
        <div className='detail_container'>

        <div className='side_nav'>
            <Link to="/"><AiOutlineRollback style={{width: '35px', height: '35px'}}/></Link>
            <div className='sidenav_div'>
                <AiOutlineHome /> 
                
                <Link to="/" className='sidenav_link'>Home</Link>
            </div>
            <div className='sidenav_div'>
                <BiLogOutCircle />
                <a href="/" className='sidenav_link'>Sign Out</a>
            </div>
        </div>

        {loading && <Spinner />}
        {error && <h3>{`There is a problem fetching your data - ${error}`}</h3>}
        {movieDetail &&
        <div className='detail_left' key={movieDetail && movieDetail.id}>
            <img src={`https://image.tmdb.org/t/p/original${movieDetail && movieDetail.poster_path}`} alt="poster" className='detail_img'/>

            <div className='detail_content'>
                <div className='content_left'>
                    <div className='content_div1'>
                        <div className='top_gun'>
                            <p data-testid='movie-title'>{movieDetail && movieDetail.title} •{" "}</p>
                            <span></span>
                            <p data-testid='movie-release-date'>{movieDetail && convertDate(movieDetail.release_date)}</p>
                            <span></span>
                            <p>PG-13</p>
                            <span></span>
                            <p data-testid='movie-runtime'>{movieDetail && movieDetail.runtime}m</p>
                        </div>
                        <div className='top_gun act_drama'>
                            {movieDetail &&
                                movieDetail.genres.map((genre) => (
                                <p key={genre.id}>
                                    {genre.name}
                                </p>
                            ))}
                        </div>
                    </div>

                    <p data-testid='movie-overview' className='content_desc'>
                        {movieDetail && movieDetail.overview
                        ? movieDetail.overview.slice(0, 500) + "..."
                        : ""}
                    </p>

                    <p className='creators'>Director: <span>Joseph Kosinski</span></p>
                    <p className='creators'>Writers:  <span>Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                    <p className='creators'>Stars: <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>

                    <div className='rate_nomina'>
                        <p className='top_rated'>Top rated movie #65</p>
                        <p className='nomination'>Awards 9 nominations</p>
                    </div>
                </div>

                <div className='content_right'>
                    <div className='right_rate'>
                        <AiFillStar style={{color: 'yellow'}}/>
                        <span>8.5</span>
                        <span className='rate_no'>| 350k</span>
                    </div>
                    <p className='showtime'><IoTicketSharp />See Showtimes</p>
                    <p className='options'><AiOutlineUnorderedList />More watch options</p>
                </div>
            </div>
        </div>
        }
        </div>

        <div className='home_footer'>
            <Footer />
        </div>
        
    </div>
  )
}

export default Detail;