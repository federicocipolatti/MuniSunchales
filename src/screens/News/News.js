import React, { useState, useEffect } from "react";
import { Cards } from "../Home/Cards/Cards";
import { Spinner } from "react-bootstrap";
import './News.css';
import { useParams } from 'react-router-dom';

const promiseContainer = () => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(
            [
                {
                    id: '1',
                    titulo: 'Noticia 1',
                    cuerpo: 'BLA BLA BLA BLA BLA 1',
                    img: '/images/card1.jpg',
                    mostrar: true
                },
            
                {
                    id: '2',
                    titulo: 'Noticia 2',
                    cuerpo: 'BLA BLA BLA BLA BLA 2',
                    img: '/images/card1.jpg',
                    mostrar: true
                },
            
                {
                    id: '3',
                    titulo: 'Noticia 3',
                    cuerpo: 'BLA BLA BLA BLA BLA 3',
                    img: '/images/card1.jpg',
                    mostrar: true
                },

                {
                    id: '4',
                    titulo: 'Noticia 4',
                    cuerpo: 'BLA BLA BLA BLA BLA 4',
                    img: '/images/card1.jpg',
                    mostrar: true
                },

                {
                    id: '5',
                    titulo: 'Noticia 5',
                    cuerpo: 'BLA BLA BLA BLA BLA 5',
                    img: '/images/card1.jpg',
                    mostrar: true
                },

                {
                    id: '6',
                    titulo: 'Noticia 6',
                    cuerpo: 'BLA BLA BLA BLA BLA 6',
                    img: '/images/card1.jpg',
                    mostrar: true
                }
            ]
        ), 2000);
    })
}

export const News = () => {
    const [noticias, setNoticias] = useState([]); 
    const {noticiaID} = useParams();

    const cambioData = () => {
        promiseContainer().then(data => {
            const dataNew = data.filter(element => element.mostrar)
            setNoticias(dataNew)
        })
    }

    useEffect(() => {
        cambioData();
    },[noticiaID])

    return <>
        {noticias.length === 0 ? (<div className="load"><Spinner animation="border" variant="success" className="spin"/></div>) : (  
            <Cards noticias={noticias}/>   
        )}
        
    </>
}