 export type TMakedBook = {
    id: string
    image: string
    title: string
    category: string
    authors: string
    link: string
}


export type TDetailBook = {
    id: string
    image: string
    title: string
    category: string
    authors: string
    description: string
}

export type TResponseSearchBook = {
    id: string
    selfLink: string
    volumeInfo: {
        authors: string[]
        categories: string[]
        title: string
        imageLinks: {
            thumbnail: string
        }
    }
}

export type TResponseDetailBook  = {
    id: string
    volumeInfo: {
        authors: string[]
        categories: string[]
        title: string
        imageLinks: {
            thumbnail: string
        }
        description: string
    }
}


export type TFormAction = {
    field: string
    value: string
}


