import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { MovieDetails } from '../screens/MovieDetails'
import { NowPlaying } from '../screens/NowPlaying'

const Stack = createNativeStackNavigator()

export function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="MovieDetails" component={MovieDetails} />
				<Stack.Screen name="NowPlaying" component={NowPlaying} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
