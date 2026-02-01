import React, { ReactElement } from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { SeeMoreButton } from '../see-more'
import { Text } from '../text'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
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

interface VerticalSectionProps<T> {
	title: string
	data: T[]
	keyExtractor: (item: T) => string
	renderItem: (item: T) => ReactElement | null
	onSeeMore?: () => void
}

export function VerticalSection<T>({
	title,
	data,
	keyExtractor,
	renderItem,
	onSeeMore,
}: VerticalSectionProps<T>) {
	const tabBarHeight = useBottomTabBarHeight()

	return (
		<View style={styles.wrapper}>
			<View style={styles.header}>
				<Text family="merriweather" size={16} weight="bold" style={{ color: '#110E47' }}>
					{title}
				</Text>

				{onSeeMore && <SeeMoreButton onPress={onSeeMore} />}
			</View>

			<FlatList
				data={data}
				keyExtractor={keyExtractor}
				renderItem={({ item }) => renderItem(item)}
				contentContainerStyle={{
					paddingBottom: tabBarHeight,
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
