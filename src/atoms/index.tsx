import { atom } from 'jotai'
import { MovieResult } from '../hooks/useTMDB'

export const atoms = {
	nowPlayingMovies: atom<MovieResult[]>([]),
}
