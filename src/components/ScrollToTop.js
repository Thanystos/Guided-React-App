import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// UseLocation retourne l'url actuelle
export default function ScrollToTop() {
    const { pathname } = useLocation()

    // À chaque fois que l'url change on va demander à ce que l'on scroll tout en haut de la page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}