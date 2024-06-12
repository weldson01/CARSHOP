import "../../index.css";
import { LinkMenu } from "./components/LinkMenu";

export const Header = () => {
    return <header className="flex min-h-24 bg-white drop-shadow-lg items-center justify-between">
        <h1 className="uppercase ml-10 text-3xl font-normal ">Carshop</h1>
        <nav className="">
            <ul className="flex gap-20 mr-20 ">
                <LinkMenu path="/" text="Modelos" />
                <LinkMenu path="/" text="Marcas" />
                <LinkMenu path="/" text="Comprar" />
                <LinkMenu path="/" text="Vender" />
            </ul>
        </nav>
    </header>
}