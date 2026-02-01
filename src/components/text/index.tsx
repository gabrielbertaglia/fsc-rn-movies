import { Text as TextRN, TextProps } from 'react-native'
import {
	typography,
	TypographyFamily,
	TypographySize,
	TypographyWeight,
} from '../../theme/typography'

interface AppTextProps extends TextProps {
	family?: TypographyFamily
	weight?: TypographyWeight<TypographyFamily>
	size?: TypographySize
}

export function Text({
	family = 'mulish',
	weight = 'regular',
	size = 16,
	style,
	children,
	...props
}: AppTextProps) {
	return (
		<TextRN
			{...props}
			style={[
				{
					fontFamily: typography.family[family][weight],
				},
				typography.size[size],
				style,
			]}
		>
			{children}
		</TextRN>
	)
}
