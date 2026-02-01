import { useEffect, useState } from 'react'
import { ActivityIndicator, Linking, TouchableOpacity, View } from 'react-native'
import { Modal } from '.'
import WebView from 'react-native-webview'
import { X } from 'lucide-react-native'

interface ModalTrailerProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	videoId: string | undefined
}

export function ModalTrailer({ visible, setVisible, videoId }: ModalTrailerProps) {
	const [hasError, setHasError] = useState(false)
	const [loading, setLoading] = useState(true)

	if (!videoId) return null

	function openExternal() {
		Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`)
		setVisible(false)
	}

	console.log('hasError', hasError)

	useEffect(() => {
		if (visible) {
			setHasError(false)
			setLoading(true)
		}
	}, [visible])

	return (
		<Modal visible={visible} animationType="slide" setVisible={setVisible}>
			<View style={{ flex: 1, backgroundColor: '#000' }}>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: 40,
						right: 20,
						zIndex: 10,
					}}
					onPress={() => setVisible(false)}
				>
					<X size={28} color="#fff" />
				</TouchableOpacity>

				{loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 120 }} />}

				{!hasError ? (
					<WebView
						style={{ marginTop: 100 }}
						javaScriptEnabled
						domStorageEnabled
						allowsFullscreenVideo
						onLoadEnd={() => setLoading(false)}
						onError={() => {
							setHasError(true)
							openExternal()
						}}
						source={{
							uri: `https://www.youtube.com/embed/${videoId}?controls=1&playsinline=1`,
						}}
					/>
				) : null}
			</View>
		</Modal>
	)
}
