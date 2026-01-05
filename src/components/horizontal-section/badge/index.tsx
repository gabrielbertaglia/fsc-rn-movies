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
			<Text style={{ color: '#88A4E8', fontSize: 10, fontWeight: 'bold' }}>{children}</Text>
		</View>
	)
}
