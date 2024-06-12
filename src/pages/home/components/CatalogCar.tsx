import { LinkButton } from "../../../components/LinkButton"
import { ListCards } from "../../../components/ListCards"
import { MockData } from "../../../services/MockData"
import { Spacing } from "./Spacing"


export const CatalogCar = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-3xl">Nosso catálogo</h2>
            <h3 className="text-2xl self-start ml-10">
                BMW
            </h3>
            <ListCards list={MockData.carList}/>
            <h3 className="text-2xl self-start ml-10">
                Mercedes
            </h3>
            <ListCards list={MockData.carList}/>
            <Spacing/>
            <LinkButton path="" text="grandes marcas"/>
        </div>
    )
}