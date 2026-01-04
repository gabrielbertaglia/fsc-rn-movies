import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { useTMDB } from '../../hooks/useTMDB'
import { HorizontalSection } from '../../components/horizontal-section'
import { MovieItem } from '../../components/movie-item'

export function Home() {
	const { getNowPlaying, nowPlayingMovies } = useTMDB()
	const navigation = useNavigation()

	useEffect(() => {
		getNowPlaying({ page: 1 })
	}, [])

	return (
		<SafeAreaView>
			<HorizontalSection
				title="Now Playing"
				data={nowPlayingMovies}
				keyExtractor={(movie) => movie.id.toString()}
				renderItem={(movie) => <MovieItem movie={movie} />}
				onSeeMore={() => navigation.navigate('NowPlaying')}
			/>
		</SafeAreaView>
	)
}
