import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { MovieResult, useTMDB } from '../../hooks/useTMDB'
import { styles } from './styles'
import { Text } from '../text'
import { Rating } from '../rating'
import { Badge } from '../horizontal-section/badge'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'

interface MovieItemProps {
	movie: MovieResult
}

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export function urlPoster(poster_path: string | null | undefined) {
	if (!poster_path) return undefined
	return `${IMAGE_BASE_URL}${poster_path}`
}

export function MovieItem({ movie }: MovieItemProps) {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	function handlePress() {
		navigation.navigate('MovieDetails', {
			movieId: movie.id,
		})
	}
	return (
		<Pressable onPress={handlePress}>
			<View style={styles.container}>
				<Image
					source={{
						uri: urlPoster(movie.poster_path),
					}}
					style={styles.poster}
					resizeMode="cover"
				/>

				<View style={styles.info}>
					<Text size={14} weight="bold" numberOfLines={2}>
						{movie.title}
					</Text>

					<Rating vote_average={movie.vote_average} />
				</View>
			</View>
		</Pressable>
	)
}

export function MovieItemHorizontal({ movie }: MovieItemProps) {
	const { genres } = useTMDB()
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	const getGenreNames = (genreIds: number[]): string[] => {
		return genreIds
			.map((id) => genres.find((genre) => genre.id === id)?.name)
			.filter((name): name is string => name !== undefined)
	}

	function handlePress() {
		navigation.navigate('MovieDetails', {
			movieId: movie.id,
		})
	}

	return (
		<Pressable onPress={handlePress}>
			<View style={styles.horizontalContainer}>
				<Image
					source={{
						uri: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : undefined,
					}}
					style={styles.horizontalPoster}
					resizeMode="cover"
				/>
				<View style={styles.horizontalInfo}>
					<Text size={14} weight="bold" numberOfLines={2}>
						{movie.title}
					</Text>

					<Rating vote_average={movie.vote_average} />
					<View style={styles.genreContainer}>
						{getGenreNames(movie.genre_ids).map((genre, index) => (
							<Badge key={index}>{genre}</Badge>
						))}
					</View>
				</View>
			</View>
		</Pressable>
	)
}
