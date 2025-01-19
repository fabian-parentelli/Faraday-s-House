import './autocomplete.scss';
import React, { useState, useEffect } from 'react';

const AutoComplete = ({ options, labelKey }) => {

    const [inputValue, setInputValue] = useState(''); // Valor del input
    const [filteredOptions, setFilteredOptions] = useState([]); // Opciones filtradas
    const [isOpen, setIsOpen] = useState(false); // Estado de la lista desplegable
    const [highlightedIndex, setHighlightedIndex] = useState(-1); // Índice de la opción seleccionada

    // Filtrar las opciones basadas en el texto ingresado
    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.length > 0) {
            const filtered = options.filter(option =>
                option[labelKey].toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
            setIsOpen(true);
        } else {
            setFilteredOptions([]);
            setIsOpen(false);
        }
    };

    // Manejar la selección de una opción
    const handleSelect = (option) => {
        setInputValue(option[labelKey]);
        setIsOpen(false);
        setHighlightedIndex(-1); // Resetea el índice al seleccionar
    };

    // Función para manejar el teclado (flechas arriba, flechas abajo, Enter)
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            if (highlightedIndex < filteredOptions.length - 1) {
                setHighlightedIndex(highlightedIndex + 1);
            }
        } else if (e.key === 'ArrowUp') {
            if (highlightedIndex > 0) {
                setHighlightedIndex(highlightedIndex - 1);
            }
        } else if (e.key === 'Enter' && highlightedIndex !== -1) {
            handleSelect(filteredOptions[highlightedIndex]);
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    // Función que maneja el cierre de la lista cuando se hace clic fuera de ella
    const handleBlur = () => {
        setTimeout(() => setIsOpen(false), 100); // Retardo para que el click en la opción sea procesado
    };

    // Limpiar el campo de entrada
    const handleClear = () => {
        setInputValue('');
        setFilteredOptions([]);
        setIsOpen(false);
    };

    // Mantener el enfoque en la opción seleccionada
    const getOptionClass = (index) => {
        return index === highlightedIndex ? 'highlighted' : '';
    };

    useEffect(() => {
        if (!isOpen) {
            setHighlightedIndex(-1); // Resetea el índice cuando la lista se cierra
        }
    }, [isOpen]);

    return (
        <div className="autocomplete">
            <div className="autocomplete-input-wrapper">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown} // Escucha el teclado
                    placeholder="Busca una opción"
                />
                {inputValue && (
                    <span className="clear-icon" onClick={handleClear}>
                        &#10005; {/* El ícono de la cruz (X) */}
                    </span>
                )}
            </div>
            {isOpen && filteredOptions.length > 0 && (
                <ul className="autocomplete-list">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={`autocomplete-item ${getOptionClass(index)}`}
                        >
                            {option[labelKey]}
                        </li>
                    ))}
                </ul>
            )}
            {isOpen && filteredOptions.length === 0 && (
                <div className="no-results">No hay resultados</div>
            )}
        </div>
    );
};

export default AutoComplete;
