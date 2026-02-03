import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { useEffect, useCallback } from 'react'

import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { useTMDB } from '../../hooks/useTMDB'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'
import { Text } from '../../components/text'
import { Rating } from '../../components/rating'
import { Header } from '../../components/header'
import { IMAGE_BASE_URL } from '../../components/movie-item'

export interface BaseMovie {
	id: number
	title: string
	poster_path?: string | null
	genre_ids: number[]
	vote_average: number
}

interface MovieItemProps<T extends BaseMovie> {
	movie: T
	disableNavigation?: boolean
}

interface NowPlayingScreenProps {
	onBackPress?: () => void
}

export function urlPoster(poster_path: string | null | undefined) {
	if (!poster_path) return undefined
	return `${IMAGE_BASE_URL}${poster_path}`
}

export function NowPlaying() {
	const navigation = useNavigation()

	const onEndReachedCalledDuringMomentum = React.useRef(false)

	const FavoritesHeader = ({ onBackPress }: NowPlayingScreenProps) => (
		<Header title="Now Playing" onBackPress={onBackPress} />
	)

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Now Playing',
			header: () => FavoritesHeader({ onBackPress: () => navigation.goBack() }),
		})
	}, [navigation])

	const { getNowPlaying, nowPlayingMovies, nowPlayingPage, nowPlayingLoading, nowPlayingHasMore } =
		useTMDB()

	useEffect(() => {
		if (nowPlayingMovies.length === 0) {
			getNowPlaying({ page: 1 })
		}
	}, [])

	const loadMore = useCallback(() => {
		if (onEndReachedCalledDuringMomentum.current) return
		if (nowPlayingLoading || !nowPlayingHasMore) return

		onEndReachedCalledDuringMomentum.current = true
		getNowPlaying({ page: nowPlayingPage + 1 })
	}, [nowPlayingLoading, nowPlayingHasMore, nowPlayingPage])

	const keyExtractor = useCallback((item: any) => `movie-${item.id}`, [])

	return (
		<SafeAreaView style={stylesNowPlaying.container}>
			<FlatList
				data={nowPlayingMovies}
				keyExtractor={keyExtractor}
				renderItem={({ item }) => <MovieItem movie={item} />}
				numColumns={3}
				contentContainerStyle={stylesNowPlaying.contentContainer}
				showsVerticalScrollIndicator={false}
				onEndReached={loadMore}
				onMomentumScrollBegin={() => {
					onEndReachedCalledDuringMomentum.current = false
				}}
				onEndReachedThreshold={0.2}
				ListEmptyComponent={
					nowPlayingLoading ? null : (
						<View style={stylesNowPlaying.centered}>
							<Text size={14}>Nenhum filme encontrado</Text>
						</View>
					)
				}
				columnWrapperStyle={{ gap: 8 }}
				ListFooterComponent={
					nowPlayingLoading ? (
						<ActivityIndicator size="large" style={stylesNowPlaying.loader} />
					) : nowPlayingHasMore ? (
						<View style={stylesNowPlaying.footer}>
							<Text size={12} style={stylesNowPlaying.footerText}>
								Toque para carregar mais
							</Text>
						</View>
					) : nowPlayingMovies.length > 0 ? (
						<View style={stylesNowPlaying.footer}>
							<Text style={stylesNowPlaying.footerText}>Todos os filmes foram carregados</Text>
						</View>
					) : null
				}
				initialNumToRender={6}
				maxToRenderPerBatch={4}
				windowSize={5}
				removeClippedSubviews={true}
			/>
		</SafeAreaView>
	)
}

export function MovieItem({ movie, disableNavigation }: MovieItemProps<BaseMovie>) {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	return (
		<Pressable
			onPress={
				disableNavigation
					? undefined
					: () => navigation.navigate('MovieDetails', { movieId: movie.id })
			}
			style={{
				flex: 1,
			}}
		>
			<View>
				<Image
					source={{ uri: urlPoster(movie.poster_path) }}
					style={{
						width: '100%',
						height: 200,
						borderRadius: 12,
						backgroundColor: '#1e1e1e',
					}}
					resizeMode="cover"
				/>

				<View style={{ marginTop: 8, justifyContent: 'flex-start', marginBottom: 8 }}>
					<Text size={14} weight="bold" numberOfLines={2}>
						{movie.title}
					</Text>
					<Rating vote_average={movie.vote_average} />
				</View>
			</View>
		</Pressable>
	)
}

const stylesNowPlaying = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		marginTop: -30,
	},
	contentContainer: {
		padding: 16,
		paddingBottom: 32,
	},

	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 40,
	},
	loader: {
		marginVertical: 24,
	},
	emptyText: {
		fontSize: 16,
		color: '#999',
		textAlign: 'center',
	},
	footer: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	footerText: {
		fontSize: 14,
		color: '#888',
		textAlign: 'center',
	},
})
