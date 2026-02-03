import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface HeaderProps {
	title: string
	showBackButton?: boolean
	renderRight?: () => React.ReactNode
	onBackPress?: () => void
}

export function Header({ title, showBackButton = true, renderRight, onBackPress }: HeaderProps) {
	const navigation = useNavigation()

	const handleBackPress = () => {
		if (onBackPress) {
			onBackPress()
		} else {
			navigation.goBack()
		}
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					{showBackButton ? (
						<TouchableOpacity
							style={styles.backButton}
							onPress={handleBackPress}
							testID="header-back-button"
						>
							<ArrowLeft size={24} color="#FFF" />
						</TouchableOpacity>
					) : (
						<View style={styles.placeholder} />
					)}
				</View>

				<View style={styles.centerContainer}>
					<Text style={styles.title} numberOfLines={1}>
						{title}
					</Text>
				</View>

				<View style={styles.rightContainer}>
					{renderRight ? renderRight() : <View style={styles.placeholder} />}
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		backgroundColor: '#110E47',
		borderBottomWidth: 1,
		borderBottomColor: '#E0E0E0',
	},
	container: {
		height: 56,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
	},
	leftContainer: {
		flex: 1,
		alignItems: 'flex-start',
	},
	centerContainer: {
		flex: 2,
		alignItems: 'center',
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 16,
	},
	backButton: {
		padding: 8,
		marginLeft: -8,
	},
	placeholder: {
		width: 40,
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		color: '#FFF',
	},
	iconButton: {
		padding: 8,
	},
})
