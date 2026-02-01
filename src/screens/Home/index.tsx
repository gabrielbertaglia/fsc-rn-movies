import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { useTMDB } from '../../hooks/useTMDB'
import { HorizontalSection, VerticalSection } from '../../components/horizontal-section'
import { MovieItem, MovieItemHorizontal } from '../../components/movie-item'

export function Home() {
	const { getNowPlaying, nowPlayingMovies, popular, getPopular, getGenres } = useTMDB()
	const navigation = useNavigation()

	useEffect(() => {
		getNowPlaying({ page: 1 })
		getPopular({ page: 1 })
		getGenres()
	}, [])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<HorizontalSection
				title="Now Playing"
				data={nowPlayingMovies}
				keyExtractor={(movie) => movie.id.toString()}
				renderItem={(movie) => <MovieItem movie={movie} />}
				// onSeeMore={() => navigation.navigate('NowPlaying')}
			/>

			<VerticalSection
				title="Popular"
				data={popular}
				keyExtractor={(movie) => movie.id.toString()}
				renderItem={(movie) => <MovieItemHorizontal movie={movie} />}
				// onSeeMore={() => navigation.navigate('Popular')}
			/>
		</SafeAreaView>
	)
}
