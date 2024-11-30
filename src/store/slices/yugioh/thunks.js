import { yugiohApi } from "../../../api/yugiohApi";
import { setRandomCard, startLoadingCard,searchByPartialName } from "./"

export const getRandomCard = () => {
    return async(dispatch,getState) => {
        dispatch(startLoadingCard());
        //todo realizar peticion http
        try{
            const resp = await yugiohApi.get('/randomcard');
            dispatch(setRandomCard(resp.data.data[0]));
        }catch(e){
            throw e;
        }
        //.then( resp => console.log(resp.data));
        //dispatch(setRandomCard({carta: resp.data.data[0], cartas:[]}));

    }
}

export const searchByCoincidence = (name = '') => {
    return async(dispatch,getState) => {
        //dispatch(startLoadingCard());
        try{
            const resp = await yugiohApi.get(`/SearchContainsName?name=${name}`);
            dispatch(searchByPartialName(resp.data));
        }catch(e){
            throw e;
        }
        //console.log('sbc ' +resp.data);
    }
}