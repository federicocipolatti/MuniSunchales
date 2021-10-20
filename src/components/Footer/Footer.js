import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return<div className="pie container-fluid">
        <div className="info">
            <h3>Municipalidad de Sunchales</h3>
            <div className="dir"><FontAwesomeIcon icon={faMapMarkerAlt}/><p className="dirTxt">Dirección 555</p></div>
            <div className="dir"><FontAwesomeIcon icon={faPhone}/><p className="dirTxt">(03493) - 421425</p></div>
            <div className="dir"><FontAwesomeIcon icon={faClock}/><p className="dirTxt">Horarios de atención: 9:00 a 13:00 hs</p></div>
            <div className="redes">
                <FontAwesomeIcon icon={faInstagram} style={{margin: "20px"}}/>
                <FontAwesomeIcon icon={faFacebookSquare} style={{margin: "20px"}}/>
                <FontAwesomeIcon icon={faLinkedin} style={{margin: "20px"}}/>
            </div>
        </div>
        <div className="gmap">
            <div className="numeros">
                <h3>Números Útiles</h3>
                <p>Guardia Urbana Sunchales (GUS): XXX</p>
                <p>Policía: XXX</p>
                <p>Punto GOB Sunchales: XXX</p>
                <p>Servicio de emergencias médicas: XXX</p>
            </div>
            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.9475887763424!2d-61.56339178486331!3d-30.
                94402828156396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943544554d5a2f79%3A0xa4db7ef8958d9235!2s
                Municipalidad%20de%20Sunchales!5e0!3m2!1ses!2sar!4v1634599154868!5m2!1ses!2sar" 
                width="400" 
                height="300" 
                style={{border: "0"}} 
                allowfullscreen="" 
                loading="lazy">
                </iframe>
            </div>
            
        </div>
    </div>
}