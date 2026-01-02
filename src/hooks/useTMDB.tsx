import { apiTMDB } from '../data-sources/tmdb'

export function useTMDB() {
	const getTopRated = async (page = 1) => {
		const { data } = await apiTMDB.get('/movie/top_rated', {
			params: {
				language: 'pt-BR',
				page,
			},
		})

		return data
	}

	const getNowPlaying = async ({
		page = 1,
		minDate,
		maxDate,
	}: {
		page?: number
		minDate?: string
		maxDate?: string
	}) => {
		const { data } = await apiTMDB.get('/discover/movie', {
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
	}

	return {
		getNowPlaying,
		getTopRated,
	}
}
