import { useState, useEffect } from "react";

const TypingText = ({ text = "", speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        // Verificar si 'text' es una cadena válida
        if (!text) return; // Si 'text' no es válido, no hacer nada

        setDisplayedText(""); // Reiniciar texto antes de empezar a escribir
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length - 1) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(interval); // Detener la animación
            }
        }, speed);

        return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonte
    }, [text, speed]);

    return <p className="typingText">{displayedText}</p>;
};

export default TypingText;
