import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Text } from '../text'

interface SeeMoreButtonProps {
	label?: string
	onPress: () => void
}

export function SeeMoreButton({ label = 'See more', onPress }: SeeMoreButtonProps) {
	return (
		<TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
			<Text variant="link">{label}</Text>
		</TouchableOpacity>
	)
}
