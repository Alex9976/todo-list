export interface Theme {
  readonly name: string

  background: string
  foreground: string
  logoBackground: string
  logoForeground: string
  footerForeground: string
  activeItemMarker: string
  itemUnderPointerMarker: string
  emphasizedText: string
  titleForeground: string
  documentHeading1Foreground: string
  documentHeading2Foreground: string
  documentTOCBackground: string
  documentScrollTopButtonBackground: string
  documentCodeInlineForeground: string
  documentCodeInlineBackground: string
  documentCodeBlockForeground: string
  documentCodeBlockBackground: string
  playgroundTextAreaBackground: string
  playgroundTextAreaForeground: string
  playgroundTextAreaCaretColor: string
  playgroundTextLengthForeground: string
  playgroundTextLengthErrorForeground: string
  playgroundWhiteSpaceForeground: string
  playgroundFindButtonBackground: string
  playgroundFindButtonForeground: string
  playgroundFindButtonCheckMarkBackground: string
  playgroundFindButtonCheckMarkForeground: string
  playgroundFindButtonCheckMarkHoverBackground: string
  playgroundTagButtonBackground: string
  playgroundTagButtonActiveForeground: string
  playgroundTagButtonInactiveForeground: string
  playgroundTagButtonCounterForeground: string
  playgroundReadOnlyPackageUnderPointerMarker: string
}

export class DarkBlueTheme implements Theme {
  readonly name = 'DarkBlueTheme'

  background = '#14344F'
  foreground = '#E0E0E0'
  logoBackground = '#00B3FF' // light blue
  logoForeground = 'white'
  footerForeground = '#777'
  activeItemMarker = '#00B3FF'
  itemUnderPointerMarker = '#00A4E5' // 10% darken light blue
  emphasizedText = '#5DF586'
  titleForeground = '#E0E0E0'
  documentHeading1Foreground = '#E0E0E0'
  documentHeading2Foreground = 'white'
  documentTOCBackground = '#122F47'
  documentScrollTopButtonBackground = '#00A4E5'
  documentCodeInlineForeground = '#67E8FF'
  documentCodeInlineBackground = 'rgba(255, 255, 255, 0.07)'
  documentCodeBlockForeground = '#67E8FF'
  documentCodeBlockBackground = 'transparent'
  playgroundTextAreaBackground = 'white'
  playgroundTextAreaForeground = '#444'
  playgroundTextAreaCaretColor = 'black'
  playgroundTextLengthForeground = 'rgb(253, 165, 93)'
  playgroundTextLengthErrorForeground = 'rgb(253, 93, 93)'
  playgroundWhiteSpaceForeground = 'lightgrey'
  playgroundFindButtonBackground = '#00B831'
  playgroundFindButtonForeground = 'white'
  playgroundFindButtonCheckMarkBackground = '#EEE'
  playgroundFindButtonCheckMarkForeground = '#444'
  playgroundFindButtonCheckMarkHoverBackground = '#DDD'
  playgroundTagButtonBackground = '#AAA'
  playgroundTagButtonActiveForeground = 'black'
  playgroundTagButtonInactiveForeground = '#E0E0E0'
  playgroundTagButtonCounterForeground = 'grey'
  playgroundReadOnlyPackageUnderPointerMarker = '#ECECEC'
}
