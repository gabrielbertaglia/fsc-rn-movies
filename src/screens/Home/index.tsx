import { MovieResult, useTMDB } from '../../hooks/useTMDB'
import { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Bookmark, Film, Ticket } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HorizontalSection } from '../../components/horizontal-section'
import { MovieItem } from '../../components/movie-item'
import { useNavigation } from '@react-navigation/native'
import { Tickets } from '../Tickets'
import { Favorites } from '../Favorites'

const Tab = createBottomTabNavigator()

function FilmTabIcon({ color, size }: { color: string; size: number }) {
	return <Film color={color} size={size} />
}

function TicketsTabIcon({ color, size }: { color: string; size: number }) {
	return <Ticket color={color} size={size} />
}

function FavoritesTabIcon({ color, size }: { color: string; size: number }) {
	return <Bookmark color={color} size={size} />
}

function HomeScreen({ nowPlayingMovies }: { nowPlayingMovies: MovieResult[] }) {
	const navigation = useNavigation()

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

export function Home() {
	const { getNowPlaying, nowPlayingMovies } = useTMDB()

	useEffect(() => {
		async function fetchMovies() {
			getNowPlaying({ page: 1 })
			console.log('nowPlayingMovies', nowPlayingMovies)
		}
		fetchMovies()
	}, [])

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarIconStyle: {
					marginTop: 4,
				},
				tabBarItemStyle: {
					paddingVertical: 6,
				},
				tabBarStyle: {
					height: 56,
				},
			}}
		>
			<Tab.Screen
				name="HomeScreen"
				component={() => <HomeScreen nowPlayingMovies={nowPlayingMovies} />}
				options={{
					tabBarIcon: FilmTabIcon,
				}}
			/>
			<Tab.Screen
				name="Tickets"
				component={Tickets}
				options={{
					tabBarIcon: TicketsTabIcon,
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={Favorites}
				options={{
					tabBarIcon: FavoritesTabIcon,
				}}
			/>
		</Tab.Navigator>
	)
}
