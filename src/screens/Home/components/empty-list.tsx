import { Text, View } from 'react-native'

export function EmptyList() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				padding: 20,
			}}
		>
			<Text>Nenhum filme encontrado.</Text>
		</View>
	)
}
