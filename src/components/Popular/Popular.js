/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx , css} from '@emotion/react';
import { useContext , Fragment} from 'react';
import { MovieContext } from '../../context/MovieContext';
import Container from '../ReusableComponents/Container';


const Popular = () => {
    const {popularMovies} = useContext(MovieContext);
    return(
        <div  css={styles} className="popularMovies">
            <Container>
                {popularMovies.results && popularMovies.results.map((popularMovieItem , index) => (
                  <div className="content">
                      <img
                      key={index}
                      src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`}
                      alt="poster"
                    />
                    <h2 className="content-header">{popularMovieItem.title}</h2>
                    <h4 className="content-header">{popularMovieItem.release_date.substring(0,4)}</h4>
                    <button className="btn-watch">Add To WatchList</button>
                 </div>
                ))}

            </Container>
        
        </div>
    )
    
};

const styles = css`
  width: 100%;
  
  .container {
    &:nth-child(1) {
      height: 80vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 38px;
        color: red;
        height: 32px;
      }
    }
    .content {
      border : 1px solid #d5d9e6;
      text-align: center;
      margin-bottom: 50px;
      height: 460px;
      background: #d5d9e6;
      transition: transform .2s;
      position: relative;
      &:hover{
        transform: scale(1.03);
      }
    }
    .content img {
      width: 100%;
      min-width: 240px;
      height: 320px;
      margin: 10px 0;
      margin:0;
    
    }
    .content-header {
      color:#000;
      font-size:15px;
      width: 220px;
      text-align:center;
    }
    .btn-watch
    {
      position:absolute;
      bottom : 0;
      padding: 4px 6px ;
      width:130px;
      transform : translate(-50% ,-50%);
      border-radius: 8px;
      background:#de284f;
      outline:none;
      border:none;
      &:hover {
        background: #249e26
      }

    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;



export default Popular; 