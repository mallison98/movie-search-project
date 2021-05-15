import { MovieResult } from "./movie-result";

export interface SearchBody {
    page: number,
    results: MovieResult[],
    total_results: number,
    total_pages: number
}