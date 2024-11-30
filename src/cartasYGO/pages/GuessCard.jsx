import React, { useEffect, useRef, useState } from 'react';
import {alert} from '../helpers';
import { CardGuess } from '../components/CardGuess';
import { getRandomCard,searchByCoincidence } from '../../store/slices/yugioh';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import 'animate.css';
import '../../index.css';


export const GuessCard = () => {
    const {carta,cartas} = useSelector( state => state.yugioh);
    const dispatch = useDispatch();
    //Sugerencias
    const [suggestions,setSuggestions] = useState([]);
    //estado para comparar la carta al azar con la  opcion del usuario
    const [correctGuess,setCorrectGuess] = useState(false);
    const [cartasBuscadas,setCartasBuscadas] = useState([]);
    const [debouncedSearchText, setDebouncedSearchText] = useState("");
    const inputSearchRef = useRef(null);

    useEffect(() => {
        // Coloca el foco en el input al montar el componente
        if (inputSearchRef.current) {
            inputSearchRef.current.focus();
        }
    }, []);

    useEffect(()=>{
        if(correctGuess){
            dispatch(getRandomCard());
            setCartasBuscadas([]);
            setSuggestions([]);
            setCorrectGuess(false);
        }
    },[correctGuess])

    useEffect(() => {
      dispatch(getRandomCard());
    }, [])

    useEffect(() => {
        const result = cartas?.data?.length > 0 ? [...cartas.data] : [];
        setSuggestions(result);
    }, [cartas])
    
    const guessTheCard = (name='') => {
        if(cartasBuscadas.length < 2){
            if(carta.name === name){
                setCorrectGuess(true);
                alert('Correct!','','success');
            }else{
                alert('Wrong!','','error');
            }

        }else{
            setCorrectGuess(true);
            alert('Wrong!',`the card was: <b>${carta.name}</b>`,'error',6000);
        }
    }

    const SiguienteCarta = () => {
        dispatch(getRandomCard());
    }
  
    const {searchText,onInputChange,onResetForm} = useForm({
        searchText: ''
    });

     // Lógica de debounce
    useEffect(() => {
        const timer = setTimeout(() => {
        setDebouncedSearchText(searchText); // Actualiza después de 500ms
        }, 500);

        return () => clearTimeout(timer); // Limpia el timeout si el usuario sigue escribiendo
    }, [searchText]);

    // Llama al método de búsqueda cuando el valor final cambia
    useEffect(() => {
        if (debouncedSearchText.trim() !== "") {
            handleSearch(debouncedSearchText);
        }
    }, [debouncedSearchText]);
  
    const onSuggestionClick = (suggestion) => {
        agregarCartaBuscada(suggestion.name);
        guessTheCard(suggestion.name);
    };
  
    const agregarCartaBuscada = (name) => {
        if(cartasBuscadas.find(c => c === name))return;
        cartasBuscadas.length <= 2 ? setCartasBuscadas([...cartasBuscadas,name]) : '';
    }

    const handleSearch = () => {
        if (searchText.trim().length <= 1) return;
        dispatch(searchByCoincidence(searchText.trim().toLowerCase()));
        onResetForm();
    };

    const searchTerm = (event) => {
          event.preventDefault(); // Solo intenta prevenir el comportamiento predeterminado si `event` existe
          handleSearch();
    }

    return (
      <>
        <div className="row">
        <div className="col-3">
            <form onSubmit={searchTerm}>
                <input 
                    type='text'
                    placeholder='Carta a buscar'
                    className='form-control m-2'
                    autoComplete='off'
                    name='searchText'
                    value={searchText}
                    onChange={onInputChange}
                    ref={inputSearchRef}
                    >
                </input>
                <button className='btn btn-primary m-2 form-control'>Buscar</button>
            </form>

            {/* Dropdown de Sugerencias */}
            {suggestions.length > 0 && (           
                    <div className="dropdown">
                        <button
                        className="btn btn-secondary dropdown-toggle w-100"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Sugerencias
                        </button>
                        <ul className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                        style={{
                            maxHeight: "200px", // Altura máxima del contenedor
                            overflowY: "auto",  // Habilita el scroll vertical
                        }}>
                        {suggestions.map((suggestion, index) => (
                            <li className='list-group-item' key={index} >
                                <button
                                    className="dropdown-item"
                                    onClick={() => onSuggestionClick(suggestion)}
                                >
                                    {suggestion.name}
                                </button>
                            </li>
                        ))}
                        </ul>
                    </div>            
            )}

            <ul className='list-group'>
                {
                    (cartasBuscadas.map( busqueda =>
                        <li 
                            className={busqueda === searchText.toLowerCase()?'animate__animated animate__shakeX list-group-item alert alert-danger':'list-group-item alert alert-danger'}
                            key={busqueda}
                            ><b>{busqueda}</b>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="col-9">
            <div className="row">          
                <CardGuess {...carta} SiguienteCarta={SiguienteCarta}/> 
            </div>
        </div>
       </div>
      </>
    )
}