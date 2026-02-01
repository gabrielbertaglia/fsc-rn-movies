import { View } from 'react-native'
import { Text } from '../../text'
import React from 'react'

export function Badge({ children }: { children: React.ReactNode }) {
	return (
		<View
			style={{
				backgroundColor: '#DBE3FF',
				alignSelf: 'flex-start',
				paddingHorizontal: 12,
				paddingVertical: 4,
				borderRadius: 999,
			}}
		>
			<Text size={8} weight="semiBold" style={{ color: '#88A4E8', fontWeight: 'bold' }}>
				{children?.toString().toUpperCase()}
			</Text>
		</View>
	)
}
