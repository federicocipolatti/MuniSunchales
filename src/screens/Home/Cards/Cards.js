import React from "react";
import { Card, Button } from "react-bootstrap";
import './Cards.css';
import { useHistory } from 'react-router-dom';

export const Cards = ({noticias}) => {

    const history = useHistory();

    return <div className="Cards">
        {noticias.map(news => (
    <Card className="Card"  key={news.id}>
        <Card.Img variant="top" src={news.img} id="cardImg"/>
        <Card.Body>
            <Card.Title>{news.titulo}</Card.Title>
            <Card.Text>
                {news.cuerpo}
            </Card.Text>
            <Button id="btnBuscar" onClick={()=> history.push(`/noticia/${news.id}`)}>Ver más</Button>
        </Card.Body>
    </Card>
    ))}
</div>
}