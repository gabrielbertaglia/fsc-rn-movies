export type RootStackParamList = {
	Home: undefined
	NowPlaying: undefined
	MovieDetails: { movieId: number }
	Popular: undefined
}

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
