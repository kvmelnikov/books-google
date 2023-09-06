 export type TMakedBook = {
    id: string
    image: string
    title: string
    category: string
    authors: string
}

export type TResponseSearchBook = {
    id: string
    volumeInfo: {
        authors: string[]
        categories: string[]
        title: string
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
    }
}

export type TFormAction = {
    field: string
    value: string
}