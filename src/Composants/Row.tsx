/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import axios from '../Requests/Axios';
import '../Styles/sRow.css';
import MovieTile from './MovieTile';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Row(props: { title: string , fetchUrl: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, fetchUrl } = props;
    const [movies, setMovies] = React.useState([]);

    const scrl = useRef<HTMLHeadingElement>(null);
    const [scrollX, setscrollX] = React.useState(0);
    
    useEffect (() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            return response;
            }
            fetchData();
        }, [fetchUrl]);

    const slide = (shift: number) => {
        if(scrl.current !== null) {
            scrl.current.scrollLeft += shift;
            setscrollX(scrollX + shift);
        }
      };
      
    return (
        <div className="div-row">
            <h2>{props.title}</h2>
            <div className="row">
                <button
                  className="prev"
                  onClick={() => slide(-800)}>
                  <ArrowBackIosIcon sx={{color: 'white'}}/>
                </button>
                <div className="row-bis" ref={scrl}>
                    {movies.map((movie: any) => (
                    <MovieTile movie={movie} type={"backdrop"}/>
                    ))} 
                </div>
                <button
                  className="next"
                  onClick={() => slide(+800)}>
                    <ArrowForwardIosIcon sx={{color: 'white'}}/>
                </button>
            </div>
        </div>
    );
}