

interface ICard {
    imgUrl: string
    title: string
    price: number
    year: number
}

export const Card = ({ imgUrl, title, price, year }: ICard) => {
    return (
        <div className="rounded-lg flex flex-col w-72 h-card_h bg-primary overflow-hidden items-center">
            <img src={imgUrl} alt={title} className="w-full"/>
            <div className="bg-primary pl-5 pt-2 w-full">
                <h4 className="text-3xl text-white">{title}</h4>
                <h4 className="text-2xl text-white">{price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</h4>
                <h5 className="text-lg text-white">{year}</h5>
            </div>
        </div>
    )
}