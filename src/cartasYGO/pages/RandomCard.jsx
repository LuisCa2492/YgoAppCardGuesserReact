import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandomCard } from "../../store/slices/yugioh";
import { Card } from "../components/Card";

export const RandomCard = () => {
  
  const {carta} = useSelector( state => state.yugioh);
  //console.log(carta);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomCard());
  }, [])
  
  const SiguienteCarta = () => {
      dispatch(getRandomCard());
  }



  return (
    <>
       <Card {...carta} SiguienteCarta={SiguienteCarta}/>
    </>
  )
}
