export interface IPopular {
    id: number
    images: string
    title: string
    fromPrice: number
    categories: string
    colors: {
        [key: string]: string
    }
}
