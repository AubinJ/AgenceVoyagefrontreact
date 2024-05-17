"use client";
import axios from "axios";
import {Header} from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Carousel } from "@material-tailwind/react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";



// Logique permettant de contacter l'api et faire le lien avec mon back

const accueil = () => {
  const [voyage, setVoyage] = useState([]);


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/voyage").then((res: any) => {
      setVoyage(res.data["voyage"]);
      console.log(res.data["voyage"]);
    });
  }, []);


  // Affichage
  
  return (
    <div>
      <Header />

      {/* Caroussel des images */}

      {voyage.map((voyage: any) => (
        <div key={voyage.id} className="md:grid md:grid-cols-2 gap-4">
          <Carousel className="rounded-xl overflow-hidden">
            {voyage.AvImage.map((image: any) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.nom}
                className="object-cover h-64 md:h-96 w-full md:w-full"
              />
            ))}
          </Carousel>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default accueil;
