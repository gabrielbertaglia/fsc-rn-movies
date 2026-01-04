import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MovieDetails } from '../screens/MovieDetails'
import { NowPlaying } from '../screens/NowPlaying'
import { HomeTabNavigator } from './home-tab-navigator'

const Stack = createNativeStackNavigator()

export function HomeStackNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
			<Stack.Screen name="MovieDetails" component={MovieDetails} />
			<Stack.Screen name="NowPlaying" component={NowPlaying} />
		</Stack.Navigator>
	)
}
