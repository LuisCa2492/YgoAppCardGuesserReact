import { useDispatch, useSelector } from 'react-redux'
import { searchByCoincidence } from "../../store/slices/yugioh";
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { CardBySimilarName } from '../components/CardBySimilarName';
import queryString from 'query-string';
import { useEffect } from 'react';

const formData ={
    searchText: name
}

export const SearchByPartialName = () => {

  const {cartas} = useSelector(state => state.yugioh);
  const dispatch = useDispatch();
  const location = useLocation();
  const {name=''} = queryString.parse(location.search);

  const {searchText,onInputChange,onResetForm} = useForm(formData);

  useEffect(() => {
    searchTerm(event);
  }, [name])
  

  const navigate = useNavigate();

  const searchTerm = (event) => {
        event.preventDefault();
        navigate(`?name=${searchText}`);
        if(searchText.trim().length <=1) return;
        dispatch(searchByCoincidence(searchText.trim().toLowerCase()));
        onResetForm();
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
                    onChange={onInputChange}>
                
                </input>
                <button className='btn btn-primary m-2 form-control'>Buscar</button>
            </form>
        </div>
        <div className="col-9">
            <div className="row">
                {
                    (cartas.length === 0)?<div className="container alert alert-danger d-flex justify-content-center"><b>No cards to show</b></div>:''
                }
                {
                    cartas.data?.map( carta => (

                        <div className="col-4 mb-3" key={carta.id}>
                        {/* Coloca la tarjeta dentro de un div con clases de Bootstrap */}
                        <CardBySimilarName {...carta} />
                      </div>
                    ))
                }

            </div>

        </div>
       </div>
    </>
  )
}
