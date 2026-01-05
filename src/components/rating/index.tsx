import { Star } from 'lucide-react-native'
import { View } from 'react-native'
import { Text } from '../text'
import { styles } from './styles'

export function Rating({ vote_average }: { vote_average: number }) {
	return (
		<View style={styles.rating}>
			<Star size={14} color="#FFC319" fill="#FFC319" />
			<Text variant="caption">{vote_average.toFixed(1)}/10 IMDb</Text>
		</View>
	)
}
