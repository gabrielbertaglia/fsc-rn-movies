import { TextStyle } from 'react-native'

export const typography = {
	family: {
		merriweather: {
			regular: 'Merriweather-Regular',
			medium: 'Merriweather-Medium',
			semiBold: 'Merriweather-SemiBold',
			bold: 'Merriweather-Bold',
		},
		mulish: {
			regular: 'Mulish-Regular',
			medium: 'Mulish-Medium',
			semiBold: 'Mulish-SemiBold',
			bold: 'Mulish-Bold',
		},
	},

	size: {
		8: { fontSize: 8, lineHeight: 10 },
		10: { fontSize: 10, lineHeight: 12 },
		12: { fontSize: 12, lineHeight: 16 },
		14: { fontSize: 14, lineHeight: 20 },
		16: { fontSize: 16, lineHeight: 24 },
		20: { fontSize: 20, lineHeight: 28 },
		24: { fontSize: 24, lineHeight: 32 },
		32: { fontSize: 32, lineHeight: 40 },
	} satisfies Record<number, TextStyle>,
} as const

export type TypographyFamily = keyof typeof typography.family
export type TypographyWeight<F extends TypographyFamily> = keyof (typeof typography.family)[F]

export type TypographySize = keyof typeof typography.size
