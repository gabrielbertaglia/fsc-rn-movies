import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { MovieItem, MovieItemHorizontal } from '../../components/movie-item'
import { HorizontalSection } from '../../components/horizontal-section'
import { Text } from '../../components/text'
import { useTMDB } from '../../hooks/useTMDB'

export function Home() {
	const { popular, nowPlayingMovies } = useTMDB()

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
						/>

						<Text
							family="merriweather"
							size={16}
							weight="bold"
							style={{ marginHorizontal: 16, marginBottom: 8 }}
						>
							Popular
						</Text>
					</>
				}
			/>
		</SafeAreaView>
	)
}
