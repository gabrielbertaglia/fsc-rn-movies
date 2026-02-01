import React, { useState } from 'react'
import {
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	ImageBackground,
	FlatList,
} from 'react-native'
import { Play } from 'lucide-react-native'
import { styles } from './styles'
import { Text } from '../../../../components/text'
import { IMAGE_BASE_URL, urlPoster } from '../../../../components/movie-item'
import LinearGradient from 'react-native-linear-gradient'
import { Rating } from '../../../../components/rating'
import { Badge } from '../../../../components/horizontal-section/badge'
import { SeeMoreButton } from '../../../../components/see-more'
import { ModalFullCasts } from '../../../../components/modal/modal-full-casts'

interface Cast {
	id: number
	name: string
	profilePath: string
}

interface MovieDetailsCardProps {
	movieDetails: MovieDetails
	onPlayTrailer?: () => void
	onSeeMoreCast?: () => void
}

export function MovieDetailsCard({
	movieDetails,
	onPlayTrailer,
	onSeeMoreCast,
}: MovieDetailsCardProps) {
	const [showAllCasts, setShowAllCasts] = useState(false)

	const minutesToHours = (minutes: number): string => {
		const hours = Math.floor(minutes / 60)
		const mins = minutes % 60
		return `${hours}h ${mins}min`
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<ImageBackground
				source={{ uri: urlPoster(movieDetails.backdrop_path) }}
				style={stylesBanner.container}
				resizeMode="cover"
			>
				<LinearGradient
					colors={['transparent', 'rgba(0,0,0,0.8)']}
					style={stylesBanner.bottomGradient}
				/>
				<TouchableOpacity style={stylesBanner.playButton}>
					<Play size={28} color="#fff" />
				</TouchableOpacity>
			</ImageBackground>

			<View style={styles.content}>
				<View style={styles.titleContainer}>
					<View style={styles.titleRow}>
						<Text size={20} weight="bold">
							{movieDetails.title}
						</Text>
					</View>

					<Rating vote_average={movieDetails.vote_average} />
				</View>

				<View style={styles.genreRow}>
					{movieDetails.genres.map((genre) => (
						<Badge key={genre.id}>{genre.name}</Badge>
					))}
				</View>

				<View style={styles.infoRow}>
					<View>
						<Text size={12} style={{ color: '#9C9C9C' }}>
							Length
						</Text>
						<Text size={12} weight="semiBold">
							{minutesToHours(movieDetails.runtime)}
						</Text>
					</View>

					<View>
						<Text size={12} style={{ color: '#9C9C9C' }}>
							Language
						</Text>
						<Text size={12} weight="semiBold">
							{movieDetails.spoken_languages[0].english_name}
						</Text>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'column',
						gap: 8,
					}}
				>
					<Text family="merriweather" size={16} weight="bold" style={{ color: '#110E47' }}>
						Description
					</Text>
					<Text size={12} style={{ lineHeight: 22, color: '#9C9C9C' }}>
						{movieDetails.overview}
					</Text>
				</View>

				<View style={styles.castHeader}>
					<Text family="merriweather" size={16} weight="bold" style={{ color: '#110E47' }}>
						Cast
					</Text>
					<SeeMoreButton label="See More" onPress={() => setShowAllCasts(true)} />
				</View>

				<FlatList
					horizontal
					data={movieDetails.casts.cast.slice(0, 6)}
					keyExtractor={(item) => String(item.id)}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<View style={styles.castItem}>
							<Image
								source={{
									uri: item.profile_path ? `${IMAGE_BASE_URL}${item.profile_path}` : undefined,
								}}
								style={styles.castImage}
							/>
							<Text size={12} style={{ color: '#110E47' }} numberOfLines={2}>
								{item.name}
							</Text>
						</View>
					)}
				/>
			</View>

			<ModalFullCasts
				visible={showAllCasts}
				setVisible={setShowAllCasts}
				movieDetails={movieDetails}
			/>
		</ScrollView>
	)
}

const stylesBanner = StyleSheet.create({
	container: {
		width: '100%',
		aspectRatio: 16 / 9,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	bottomGradient: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 80,
	},

	playButton: {
		backgroundColor: 'rgba(0,0,0,0.6)',
		padding: 18,
		borderRadius: 50,
	},
})
