import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { Text } from '../../components/text'
import { MovieItemHorizontal } from '../../components/movie-item'
import { getFavorites } from '../../storage/favorites'
import { VerticalSection } from '../../components/horizontal-section'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { FavoriteMovie } from '../../types/favorites'

export function Favorites() {
	const [favorites, setFavorites] = useState<FavoriteMovie[]>([])

	useFocusEffect(
		useCallback(() => {
			loadFavorites()
		}, [])
	)

	const loadFavorites = async () => {
		const data = await getFavorites()
		setFavorites(data)
	}

	if (favorites.length === 0) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text size={14} style={{ color: '#9C9C9C' }}>
					You have no favorite movies yet.
				</Text>
			</View>
		)
	}

	return (
		<View style={{ flex: 1, paddingHorizontal: 16 }}>
			<VerticalSection
				title="Favorites"
				data={favorites}
				keyExtractor={(movie) => movie.id.toString()}
				renderItem={(movie) => <MovieItemHorizontal movie={movie} disableNavigation />}
			/>
		</View>
	)
}
