import {
	FlatList,
	Image,
	Modal as ModalRN,
	ModalProps as ModalPropsRN,
	Pressable,
	StyleSheet,
	View,
} from 'react-native'
import { Text } from '../text'
import { IMAGE_BASE_URL } from '../movie-item'

interface ModalProps extends ModalPropsRN {
	visible: boolean
	setVisible: (visible: boolean) => void
	children: React.ReactNode
}

export function Modal({ visible, children, setVisible }: ModalProps) {
	return (
		<ModalRN
			visible={visible}
			animationType="slide"
			presentationStyle="fullScreen"
			onRequestClose={() => setVisible(false)}
		>
			{children}
		</ModalRN>
	)
}
