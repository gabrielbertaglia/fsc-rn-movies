import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Bookmark, Film, Ticket } from 'lucide-react-native'
import { Tickets } from '../screens/Tickets'
import { Favorites } from '../screens/Favorites'

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

export function HomeTabNavigator() {
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
				name="Home"
				component={Home}
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
