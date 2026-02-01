import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { MovieItem, MovieItemHorizontal } from '../../components/movie-item'
import { HorizontalSection } from '../../components/horizontal-section'
import { Text } from '../../components/text'
import { useTMDB } from '../../hooks/useTMDB'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

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
			<FlatList
				data={popular}
				keyExtractor={(movie) => movie.id.toString()}
				renderItem={({ item }) => <MovieItemHorizontal movie={item} />}
				contentContainerStyle={{ paddingHorizontal: 16 }}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<>
						<HorizontalSection
							title="Now Playing"
							data={nowPlayingMovies}
							keyExtractor={(movie) => movie.id.toString()}
							renderItem={(movie) => <MovieItem movie={movie} />}
							onSeeMore={() => navigation.navigate('NowPlaying')}
						/>

						<Text
							family="merriweather"
							size={16}
							weight="bold"
							style={{ marginBottom: 8, color: '#110E47' }}
						>
							Popular
						</Text>
					</>
				}
			/>
		</SafeAreaView>
	)
}
