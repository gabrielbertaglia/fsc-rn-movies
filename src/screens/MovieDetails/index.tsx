import { Text } from '../../components/text'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
import { useEffect } from 'react'
import { useTMDB } from '../../hooks/useTMDB'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MovieDetailsCard } from './components/movie-details-card'

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>

export function MovieDetails() {
	const route = useRoute<MovieDetailsRouteProp>()
	const { movieId } = route.params

	const { getMovieDetails, movieDetails } = useTMDB()

	useEffect(() => {
		getMovieDetails(movieId)
	}, [movieId])

	if (!movieDetails) {
		return (
			<SafeAreaView>
				<Text>Loading...</Text>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
			<MovieDetailsCard movieDetails={movieDetails} />
		</SafeAreaView>
	)
}
