import { Genre } from '../hooks/useTMDB'

export function getGenreNames(genreIds: number[], genres: Genre[]): string[] {
	return genres.filter((genre) => genreIds.includes(genre.id)).map((genre) => genre.name)
}
