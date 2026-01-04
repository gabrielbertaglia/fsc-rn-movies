import { View, Pressable, StyleSheet } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const insets = useSafeAreaInsets()

	return (
		<View style={[styles.container, { paddingBottom: insets.bottom }]}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				const Icon = options.tabBarIcon

				return (
					<Pressable key={route.key} onPress={onPress} style={styles.tab}>
						{Icon?.({
							focused: isFocused,
							color: isFocused ? '#110E47' : '#BCBCCD',
							size: 24,
						})}
					</Pressable>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 0.5,
		borderColor: '#E5E7EB',
	},
	tab: {
		flex: 1,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
