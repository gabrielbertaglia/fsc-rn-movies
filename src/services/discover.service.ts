import { apiTMDB } from '../data-sources/tmdb'

export interface DiscoverMovie {
	id: number
	title: string
	overview: string
	poster_path: string | null
	release_date: string
	vote_average: number
}

export interface DiscoverMoviesResponse {
	page: number
	results: DiscoverMovie[]
	total_pages: number
	total_results: number
}

interface DiscoverMoviesParams {
	page?: number
	minDate?: string
	maxDate?: string
}

export async function discoverMovies({ page = 1, minDate, maxDate }: DiscoverMoviesParams) {
	try {
		const { data } = await apiTMDB.get<DiscoverMoviesResponse>('/discover/movie', {
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

		return data
	} catch (error) {
		console.error('Erro ao buscar filmes (discover):', error)
		throw error
	}
}
