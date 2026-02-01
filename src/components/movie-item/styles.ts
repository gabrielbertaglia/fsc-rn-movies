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
	horizontalContainer: {
		flexDirection: 'row',
		width: '100%',
		marginBottom: 16,
	},
	horizontalPoster: {
		width: 85,
		height: 120,
		borderRadius: 5,
	},
	horizontalInfo: {
		flex: 1,
		marginLeft: 16,
		gap: 8,
	},
	genreContainer: {
		flexDirection: 'row',
		gap: 8,
		flexWrap: 'wrap',
	},
})
