import { dbScoreApi,yugiohApi } from "../../../api";
import { updateScore } from "../../../cartasYGO/helpers";
import { setRandomCard, startLoadingCard,searchByPartialName, setTotalScore,setActualScore, setUsersLeaderBoard } from "./"

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

export const getUserScore = (uid,email,displayName) => {
    return async(dispatch,getState) => {
        
        try {
            const userPoints = await dbScoreApi.get(`/UserPoints/GetUserData/${uid}`);
            const {score} = userPoints.data;
            if(userPoints.data !== ''){ 
                console.log('points',userPoints.data);
                //dispatch(setTotalScore(score));
                dispatch(setActualScore(score));
            }else {
                console.log('no data ' + userPoints.data);
                //si no  esta guardado el usuario en la api se ingresa
                const newUserResult = await dbScoreApi.post('/UserPoints/InsertUpdateNewUserPoints',{
                    Uid: uid,
                    Email:email,
                    DisplayName: displayName,
                    PhotoURL:'',
                    Score: 0,
                    StatusAccount: 'ACTIVE'
                });
            }
        } catch (error) {
            throw error;
        }
    }
}

export const UpdateUserScore = (uid,email,displayName,score) => {
    return async(dispatch,getState) => {
        
        try {
           console.log('points',score);
            //si no  esta guardado el usuario en la api se ingresa
            const newUserResult = await dbScoreApi.post('/UserPoints/InsertUpdateNewUserPoints',{
                Uid: uid,
                Email:email,
                DisplayName: displayName,
                PhotoURL:'',
                Score: score,
                StatusAccount: 'ACTIVE'
            });

            
        } catch (error) {
            throw error;
        }
    }
}


export const setUserScore = (guessesAmount,uid,email,displayName) => {
    return async(dispatch,getState) => {
        dispatch((dispatch, getState) => {
            // Actualizar el puntaje
            dispatch(setActualScore(updateScore(guessesAmount)));
    
            // Obtener el estado actualizado
            const updatedScore = getState().yugioh.actualScore;
            // Llamar a la API con el puntaje actualizado
            dispatch(UpdateUserScore(uid, email, displayName, updatedScore));
        });
    }
       
}

export const getUsersLeaderBoard = () => {
    return async(dispatch,getState) => {
        try {
            const leaderboardResult = await dbScoreApi.get('/UserPoints/GetData');
            dispatch(setUsersLeaderBoard(leaderboardResult.data));
        } catch (error) {
            throw error;
        }
    }
}