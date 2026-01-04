import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: 140,
	},
	poster: {
		width: '100%',
		height: 210,
		borderRadius: 5,
		backgroundColor: '#1e1e1e',
	},
	info: {
		marginTop: 8,
	},
	title: {
		fontSize: 14,
		fontWeight: '600',
		color: '#000000',
	},
	rating: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 4,
	},
	ratingText: {
		marginLeft: 4,
		fontSize: 12,
		color: '#9C9C9C',
	},
})
