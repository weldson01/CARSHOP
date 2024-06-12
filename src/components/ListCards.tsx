import { ICarList } from "../services/MockData";
import { Card } from "./Card";


// @ts-ignore
export const ListCards = ({list})=>{
    
    
    return(
        <div className="flex flex-wrap gap-5 items-start justify-evenly max-w-full">
            {list ? list.map((item : ICarList)=>{
                return(<Card imgUrl={item.imgUrl? item.imgUrl:""} title={item.model} price={item.price} year={item.year} key={item.id}/>)
            }) : "Não foi possível encontrar"}
        </div>
    );
}