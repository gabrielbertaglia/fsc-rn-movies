import axios from 'axios'
import { TMDB_TOKEN } from '@env'

export const apiTMDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		accept: 'application/json',
		authorization: `Bearer ${TMDB_TOKEN}`,
	},
})
