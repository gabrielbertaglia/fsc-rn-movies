import { NavigationContainer } from '@react-navigation/native'
import { HomeStackNavigation } from './home-stack-navigation'

export function Navigation() {
	return (
		<NavigationContainer>
			<HomeStackNavigation />
		</NavigationContainer>
	)
}
