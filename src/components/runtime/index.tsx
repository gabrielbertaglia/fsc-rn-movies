import { Clock3 } from 'lucide-react-native'
import { View } from 'react-native'
import { styles } from './styles'
import { Text } from '../text'

export function Runtime({ runtime }: { runtime: number | null }) {
	return (
		<View style={styles.durationContainer}>
			<Clock3 size={10} />
			<Text variant="caption" style={{ color: '#000' }}>
				{runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : 'N/A'}
			</Text>
		</View>
	)
}
