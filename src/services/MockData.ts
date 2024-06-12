
export interface ICarList{
    id:number
    brand: string
    model: string
    year: number
    price: number
    imgUrl?: string
}


export class MockData{
    static carList: ICarList[] =[
        {
            id:0,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        },
        {
            id:1,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        },
        {
            id:2,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        },
        {
            id:3,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        },
        {
            id:4,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        }
        ,
        {
            id:5,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        }
        ,
        {
            id:6,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        }
        ,
        {
            id:7,
            brand: "BMW",
            model: "i4",
            year: 2024,
            price: 469950,
            imgUrl: "https://cdn.motor1.com/images/mgl/NGeop2/s3/bmw-i4-m50-xdrive-2024.jpg"
        }
    ] 
}