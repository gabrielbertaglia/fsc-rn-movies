import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		marginTop: 24,
	},
	header: {
		paddingHorizontal: 16,
		marginBottom: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: '#110E47',
	},
	seeMore: {
		fontSize: 14,
		color: '#4da6ff',
		fontWeight: '500',
	},
	list: {
		paddingHorizontal: 16,
		gap: 12,
	},
})
