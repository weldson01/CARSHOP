import { Atom } from "@phosphor-icons/react"


export const Footer = () => {
    return (
        <footer className="flex flex-col mt-10 p-10 justify-center items-center bg-primary text-white">
            <h2 className="text-4xl">CARSHOP</h2>
            <div className="flex justify-evenly w-full">
                <div className="text-lg">
                    <h3>Contatos</h3>
                    <a href="mailto:weldsoncarlos007@gmail.com?subject=Olá Weldson, gostaria de falar com você &body=Gostei do seu site CARSHOP e gostaria de falar mais com você sobre...">Email: <span>weldsoncarlos007@gmail.com</span></a>
                    <p>Site: <span>www.linkedin.com/in/weldson-carlos/</span></p>
                </div>
                <div className="text-second">
                    <Atom size={90}/>
                </div>
            </div>
        </footer>
    )
}