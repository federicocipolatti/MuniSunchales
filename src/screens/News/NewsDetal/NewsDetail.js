import React, { useState, useEffect } from "react";
import './NewsDetail.css';
import { NewsShow } from './NewsShow/NewsShow';
import { useParams } from "react-router";

export const NewsDetail = () => {

    const promiseContainer = () => {

        return new Promise ((resolve, reject) => {
            resolve(
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
            );
        })
    }
    
    const [noticias, setNoticias] = useState([]); 
    const {noticiaID} = useParams();

    const cambioData = () => {
        promiseContainer().then(data => {
            const dataNew = data.filter(element => element.id === noticiaID)
            setNoticias(dataNew)
        })
    }

    useEffect(() => {
        cambioData();
    },[noticiaID])

    return <>

        {noticias.map(noticia => (
            <div className='Noticia' key={noticia.id}>
                    <NewsShow noticia={noticia}/>
            </div>   
            ))
        }
    </>   

}