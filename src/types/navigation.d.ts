export type RootStackParamList = {
	Home: undefined
	NowPlaying: undefined
	MovieDetails: { movieId: number }
}

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
