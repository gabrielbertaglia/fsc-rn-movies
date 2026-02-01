import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { SeeMoreButton } from '../see-more'
import { Text } from '../text'
// import { MerriweatherText } from '../text/merriweather'

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
				<Text family="merriweather" size={16} style={{ color: '#110E47' }} weight="bold">
					{title}
				</Text>
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

export function VerticalSection<T>({
	title,
	data,
	keyExtractor,
	renderItem,
	onSeeMore,
}: HorizontalSectionProps<T>) {
	return (
		<View style={[styles.wrapper, { flex: 1 }]}>
			<View style={styles.header}>
				<Text family="merriweather" size={16} style={{ color: '#110E47' }} weight="bold">
					{title}
				</Text>
				{onSeeMore && <SeeMoreButton onPress={onSeeMore} />}
			</View>
			<FlatList
				data={data}
				keyExtractor={keyExtractor}
				renderItem={({ item }) => renderItem(item)}
				contentContainerStyle={styles.list}
			/>
		</View>
	)
}
