export interface IPopular {
    id: number
    images: string
    title: string
    fromPrice: number
    colors: {
        [key: string]: string
    }
}
