import { useAtom } from 'jotai'
import { apiTMDB } from '../data-sources/tmdb'
import { atoms } from '../atoms'

export interface MovieResult {
	adult: boolean
	backdrop_path: string | null
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

interface TMDBListResponse<T> {
	page: number
	results: T[]
	total_pages: number
	total_results: number
}

interface GetNowPlayingParams {
	page?: number
	minDate?: string
	maxDate?: string
}

export interface Genre {
	id: number
	name: string
}

export interface TMDBGenresResponse {
	genres: Genre[]
}

export interface MovieResultWithRuntime extends MovieResult {
	runtime: number | null
}

export function useTMDB() {
	const [nowPlayingMovies, setNowPlayingMovies] = useAtom<MovieResult[]>(atoms.nowPlayingMovies)
	const [popular, setPopular] = useAtom<MovieResult[]>(atoms.popularMovies)
	const [genres, setGenres] = useAtom<Genre[]>(atoms.genres)
	const [movieDetails, setMovieDetails] = useAtom(atoms.movieDetails)

	const getNowPlaying = async ({
		page = 1,
		minDate,
		maxDate,
	}: GetNowPlayingParams): Promise<MovieResult[]> => {
		const { data } = await apiTMDB.get<TMDBListResponse<MovieResult>>('/discover/movie', {
			params: {
				include_adult: false,
				include_video: false,
				language: 'pt-BR',
				sort_by: 'popularity.desc',
				with_release_type: '2|3',
				page,
				...(minDate && { 'release_date.gte': minDate }),
				...(maxDate && { 'release_date.lte': maxDate }),
			},
		})

		setNowPlayingMovies(data.results)
		return data.results
	}

	const getGenres = async () => {
		const { data } = await apiTMDB.get<TMDBGenresResponse>('/genre/movie/list', {
			params: {
				language: 'pt-BR',
			},
		})
		setGenres(data.genres)
		return data.genres
	}

	const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
		const { data } = await apiTMDB.get<MovieDetails>(`/movie/${movieId}`, {
			params: {
				language: 'pt-BR',
				append_to_response: 'videos,casts',
			},
		})

		setMovieDetails(data)
		return data
	}

	const getPopular = async ({ page = 1 }): Promise<MovieResult[]> => {
		const { data } = await apiTMDB.get<TMDBListResponse<MovieResult>>('/movie/popular', {
			params: {
				language: 'pt-BR',
				page,
			},
		})

		setPopular(data.results)
		return data.results
	}

	return {
		nowPlayingMovies,
		popular,
		genres,
		movieDetails,
		getNowPlaying,
		getPopular,
		getGenres,
		getMovieDetails,
	}
}
