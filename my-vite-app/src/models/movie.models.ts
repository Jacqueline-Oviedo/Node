export interface Movie{
    id: number;
    tittle: string;
    year: number;
    genre: string;
    rating: number;
    posterUrl: string;
    description?: string;
    duration?: number;
    director?: string;
}
