import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface SeeMoreButtonProps {
	label?: string
	onPress: () => void
}

export function SeeMoreButton({ label = 'See more', onPress }: SeeMoreButtonProps) {
	return (
		<TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
			<Text style={styles.text}>{label}</Text>
		</TouchableOpacity>
	)
}
