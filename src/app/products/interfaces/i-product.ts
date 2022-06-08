export interface IProduct {
    id: number,
    name: string,
    description: string,
    categoryId: number,
    price: number,
    dimensionsId: number,
    image: string
    category?: string,
    dimensions?: string
}
