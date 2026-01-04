import React from 'react'
import { Image, Text, View } from 'react-native'
import { MovieResult } from '../../hooks/useTMDB'
import { styles } from './styles'
import { Star } from 'lucide-react-native'

interface MovieItemProps {
	movie: MovieResult
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export function MovieItem({ movie }: MovieItemProps) {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : undefined,
				}}
				style={styles.poster}
				resizeMode="cover"
			/>

			<View style={styles.info}>
				<Text style={styles.title} numberOfLines={2}>
					{movie.title}
				</Text>

				<View style={styles.rating}>
					<Star size={14} color="#FFC319" fill="#FFC319" />
					<Text style={styles.ratingText}>{movie.vote_average.toFixed(1)}/10 IMDb</Text>
				</View>
			</View>
		</View>
	)
}
