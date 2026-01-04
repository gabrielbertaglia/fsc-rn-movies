import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { SeeMoreButton } from '../see-more'

interface HorizontalSectionProps<T> {
	title: string
	data: T[]
	keyExtractor: (item: T, index: number) => string
	renderItem: (item: T) => React.ReactElement
	onSeeMore?: () => void
}

export function HorizontalSection<T>({
	title,
	data,
	keyExtractor,
	renderItem,
	onSeeMore,
}: HorizontalSectionProps<T>) {
	return (
		<View style={styles.wrapper}>
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>

				{onSeeMore && <SeeMoreButton onPress={onSeeMore} />}
			</View>

			<FlatList
				horizontal
				data={data}
				keyExtractor={keyExtractor}
				renderItem={({ item, index }) => renderItem(item)}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.list}
			/>
		</View>
	)
}
