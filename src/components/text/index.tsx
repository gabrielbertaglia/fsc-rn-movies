import React from 'react'
import { Text as RNText, TextProps, StyleSheet } from 'react-native'

type TextVariant = keyof typeof typography

interface Props extends TextProps {
	variant?: TextVariant
}

export function Text({ variant = 'body', style, ...props }: Props) {
	return <RNText {...props} style={[styles.base, typography[variant], style]} />
}

const styles = StyleSheet.create({
	base: {
		includeFontPadding: false,
	},
})
export const typography = {
	base: {
		fontSize: 12,
		fontWeight: '400',
		color: '#000',
	},

	body: {},

	caption: {
		fontSize: 12,
		color: '#9C9C9C',
	},

	movieTitle: {
		fontSize: 14,
		fontWeight: '700',
		color: '#000',
	},

	sectionTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: '#110E47',
	},

	link: {
		fontSize: 10,
		fontWeight: '500',
		color: '#AAA9B1',
	},
} as const
