# Typography

**Selector:**
og-typography

**Use:**
`<og-typography></og-typography>`

## Style object
```javascript
import TypographyStyle from '@opensesame/gemini/components/Typography';
```

## Module
```javascript
import { TypographyModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TypographyProps } from '@opensesame/gemini';
import { TypographyClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TypographyStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
align | 'inherit' &#124; 'left' &#124; 'center' &#124; 'right' &#124; 'justify' | 'inherit' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'error' &#124; 'info' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'textPrimary' &#124; 'textSecondary' &#124; 'warning' | 'textPrimary' |
display | 'block' &#124; 'inherit' &#124; 'initial' &#124; 'inline' &#124; 'inlineBlock' | 'block' |
element | 'div' &#124; 'h1' &#124; 'h2' &#124; 'h3' &#124; 'h4' &#124; 'h5' &#124; 'h6' &#124; 'p' &#124; 'span' | The element that makes sense for the selected variant | The element to render. For example, if you want variant `caption` rendered as an `h3` instead of the default `span`, use `element="h3" variant="caption"`
elementMap | { [key in TypographyVariants]: ElementProp } | | Override the variant/element mappings
fontWeight | 'black' &#124; 'bold' &#124; 'extraBold' &#124; 'extraLight' &#124; 'inherit' &#124; 'light' &#124; 'medium' &#124; 'regular' &#124; 'semiBold' &#124; 'thin' | |
gutterBottom | boolean &#124; string | false | If `true`, a little bit of padding will be added at the bottom.
noWrap | boolean &#124; string | false |
paragraph | boolean &#124; string | false | If `true`, padding will be added at the bottom.
variant | 'h1' &#124; 'h2' &#124; 'h3' &#124; 'h4' &#124; 'h5' &#124; 'h6' &#124; 'subtitle1' &#124; 'subtitle2' &#124; 'body' &#124; 'body1' &#124; 'body2' &#124; 'button' &#124; 'caption' &#124; 'overline' &#124; 'inherit' &#124; 'srOnly' | 'body' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-typography-root | Styles applied to the root element.
alignCenter | .og-typography-align-center | Styles applied when `align="center"`.
alignInherit | .og-typography-align-inherit | Styles applied when `align="inherit"`.
alignJustify | .og-typography-align-justify | Styles applied when `align="justify"`.
alignLeft | .og-typography-align-left | Styles applied when `align="left"`.
alignRight | .og-typography-align-right | Styles applied when `align="right"`.
colorError | .og-typography-color-error | Styles applied when `color="error"`.
colorInfo | .og-typography-color-info | Styles applied when `color="info"`.
colorInherit | .og-typography-color-inherit | Styles applied when `color="inherit"`.
colorPrimary | .og-typography-color-primary | Styles applied when `color="primary"`.
colorSecondary | .og-typography-color-secondary | Styles applied when `color="secondary"`.
colorSuccess | .og-typography-color-success | Styles applied when `color="success"`.
colorTextPrimary | .og-typography-color-text-primary | Styles applied when `color="textPrimary"`.
colorTextSecondary | .og-typography-color-text-secondary | Styles applied when `color="textSecondary"`.
colorWarning | .og-typography-color-warning | Styles applied when `color="warning"`.
displayBlock | .og-typography-display-block | Styles applied when `display="block"`.
displayInherit | .og-typography-display-inherit | Styles applied when `display="inherit"`.
displayInitial | .og-typography-display-initial | Styles applied when `display="initial"`.
displayInline | .og-typography-display-inline | Styles applied when `display="inline"`.
displayInlineBlock | .og-typography-display-inline-block | Styles applied when `display="inlineBlock"`.
fontWeightBlack | .og-typography-font-weight-black | Styles applied when `fontWeight="black"`.
fontWeightBold | .og-typography-font-weight-bold | Styles applied when `fontWeight="bold"`.
fontWeightExtraBold | .og-typography-font-weight-extra-bold | Styles applied when `fontWeight="extraBold"`.
fontWeightExtraLight | .og-typography-font-weight-extra-light | Styles applied when `fontWeight="extraLight"`.
fontWeightInherit | .og-typography-gont-weight-inherit | Styles applied when `fontWeight="inherit"`.
fontWeightLight | .og-typography-font-weight-light | Styles applied when `fontWeight="light"`.
fontWeightMedium | .og-typography-font-wieght-medium | Styles applied when `fontWeight="medium"`.
fontWeightRegular | .og-typography-font-weight-regular | Styles applied when `fontWeight="regular"`.
fontWeightSemiBold | .og-typography-font-weight-semi-bold | Styles applied when `fontWeight="semiBold"`.
fontWeightThin | .og-typography-font-weight-thin | Styles applied when `fontWeight="thin"`.
gutterBottom | .og-typography-gutter-bottom | Styles applied when `[gutterBottom]="true"`.
noWrap | .og-typography-no-wrap | Styles applied when `[noWrap]="true"`.
paragraph | .og-typography-paragraph | Styles applied when `[paragraph]="true"`.
h1 | .og-typography-h1 |
h2 | .og-typography-h2 |
h3 | .og-typography-h3 |
h4 | .og-typography-h4 |
h5 | .og-typography-h5 |
h6 | .og-typography-h6 |
subtitle1 | .og-typography-subtitle1 |
subtitle2 | .og-typography-subtitle2 |
body | .og-typography-body |
body1 | .og-typography-body1 |
body2 | .og-typography-body2 |
button | .og-typography-button |
caption | .og-typography-caption |
overline | .og-typography-overline |
inherit | .og-typography-inherit |
srOnly | .og-typography-sr-only |
