import React from 'react';
import './NewsShow.css';
import { Card } from 'react-bootstrap';

export const NewsShow = ({noticia}) => {

  return <div className="NewsDetail"> 
    <Card>
        <Card.Img variant="top" src={noticia.img}/>
        <Card.Body>
            <Card.Text className="titulo">
                {noticia.titulo}
            </Card.Text>
            <Card.Text className="cuerpo">
                {noticia.cuerpo}
            </Card.Text>
        </Card.Body>
    </Card>
  </div>
}