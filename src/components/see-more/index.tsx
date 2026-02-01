import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Text } from '../text'
// import { MulishText } from '../text/mulish'

interface SeeMoreButtonProps {
	label?: string
	onPress: () => void
}

export function SeeMoreButton({ label = 'See more', onPress }: SeeMoreButtonProps) {
	return (
		<TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
			<Text size={10} style={{ color: '#AAA9B1' }}>
				{label}
			</Text>
		</TouchableOpacity>
	)
}
