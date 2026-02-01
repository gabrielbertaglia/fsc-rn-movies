import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'column',
		gap: 8,
	},
	playButton: {
		position: 'absolute',
		alignSelf: 'center',
		top: '45%',
		backgroundColor: 'rgba(0,0,0,0.6)',
		padding: 18,
		borderRadius: 50,
	},

	content: {
		marginTop: -12,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
		padding: 20,
	},

	titleRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	genreRow: {
		flexDirection: 'row',
		paddingVertical: 16,
		gap: 8,
	},
	infoRow: {
		flexDirection: 'row',
		gap: 32,
		paddingBottom: 16,
	},

	castHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 24,
		marginBottom: 12,
	},

	castItem: {
		width: 80,
	},
	castImage: {
		width: 80,
		height: 100,
		borderRadius: 12,
		marginBottom: 6,
	},
})
