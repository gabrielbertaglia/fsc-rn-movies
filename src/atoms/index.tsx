import { atom } from 'jotai'
import { Genre, MovieResult } from '../hooks/useTMDB'

export const atoms = {
	nowPlayingMovies: atom<MovieResult[]>([]),
	popularMovies: atom<MovieResult[]>([]),
	genres: atom<Genre[]>([]),
	movieDetails: atom<MovieDetails | null>(null),
}
