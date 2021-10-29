import React, { useState, useEffect } from "react";
import { CarouselMuni } from "./CarouselMuni/CarouselMuni";
import { Cards } from "./Cards/Cards";

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

export const Home = () => {

    const [noticias, setNoticias] = useState([]); 

    const cambioData = () => {
        promiseContainer().then(data => {
            const dataNew = data.filter(element => element.mostrar)
            setNoticias(dataNew)
        })
    }

    useEffect(() => {
        cambioData();
    },[])

    return <>
        <CarouselMuni/>
        <Cards noticias={noticias}/>
    </>
}