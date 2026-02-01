import AsyncStorage from '@react-native-async-storage/async-storage'
import { FavoriteMovie } from '../types/favorites'

const STORAGE_KEY = '@favorite_movies'

export async function getFavorites(): Promise<FavoriteMovie[]> {
	const data = await AsyncStorage.getItem(STORAGE_KEY)
	return data ? JSON.parse(data) : []
}

export async function isMovieFavorite(movieId: number): Promise<boolean> {
	const favorites = await getFavorites()
	return favorites.some((movie) => movie.id === movieId)
}

export async function toggleFavorite(movie: FavoriteMovie): Promise<boolean> {
	const favorites = await getFavorites()

	const exists = favorites.some((item) => item.id === movie.id)
	const updatedFavorites = exists
		? favorites.filter((item) => item.id !== movie.id)
		: [...favorites, movie]

	await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites))
	return !exists
}
