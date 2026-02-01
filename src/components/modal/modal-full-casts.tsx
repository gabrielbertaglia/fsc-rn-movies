import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { Text } from '../text'
import { IMAGE_BASE_URL } from '../movie-item'
import { Modal } from '.'

interface ModalFullCastsProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	movieDetails: MovieDetails
}

export function ModalFullCasts({ visible, setVisible, movieDetails }: ModalFullCastsProps) {
	console.log('movieDetails', movieDetails.casts.cast)
	return (
		<Modal visible={visible} setVisible={setVisible}>
			<View style={styles.modalContainer}>
				<View style={styles.modalHeader}>
					<Text size={16} weight="semiBold">
						Full Cast
					</Text>

					<Pressable onPress={() => setVisible(false)}>
						<Text>Close</Text>
					</Pressable>
				</View>

				<FlatList
					data={movieDetails.casts.cast}
					keyExtractor={(item) => String(item.id)}
					numColumns={3}
					contentContainerStyle={styles.castGrid}
					renderItem={({ item }) => (
						<View style={styles.gridItem}>
							{item.profile_path ? (
								<Image
									source={{ uri: `${IMAGE_BASE_URL}${item.profile_path}` }}
									style={styles.castImage}
								/>
							) : (
								<View style={styles.avatarFallback}>
									<Text style={styles.avatarInitial}>{item.name.charAt(0)}</Text>
								</View>
							)}
							<Text numberOfLines={2}>{item.name}</Text>
						</View>
					)}
				/>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	castGrid: {
		paddingHorizontal: 12,
		paddingBottom: 24,
	},

	castImage: {
		width: '100%',
		height: 130,
		borderRadius: 12,
		marginBottom: 6,
	},

	modalContainer: {
		flex: 1,
	},

	modalHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
	},

	gridItem: {
		flex: 1,
		margin: 8,
		alignItems: 'center',
	},

	avatarFallback: {
		width: '100%',
		height: 130,
		borderRadius: 12,
		backgroundColor: '#222',
		alignItems: 'center',
		justifyContent: 'center',
	},

	avatarInitial: {
		fontSize: 30,
		color: '#fff',
		fontWeight: '600',
	},
})
