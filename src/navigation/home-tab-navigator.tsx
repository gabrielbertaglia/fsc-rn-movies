import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Bookmark, Film } from 'lucide-react-native'
import { Favorites } from '../screens/Favorites'
import { TabBar } from './tab-bar'

const Tab = createBottomTabNavigator()

function FilmTabIcon({ color, size }: { color: string; size: number }) {
	return <Film color={color} size={size} />
}

function FavoritesTabIcon({ color, size }: { color: string; size: number }) {
	return <Bookmark color={color} size={size} />
}

export function HomeTabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: FilmTabIcon,
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
