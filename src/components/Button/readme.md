# Button
Buttons allow users to take action.

**Material documentation:**
[Buttons](https://material.io/design/environment/buttons.html)

**Selector:**
og-button

**Use:**
`<og-button></og-button>`

## Style object
```javascript
import ButtonStyle from '@opensesame/gemini/components/Button';
```

## Module
```javascript
import { ButtonModule } from '@opensesame/gemini;
```

## Types
```javascript
import { ButtonProps } from '@opensesame/gemini';
import { ButtonClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { ButtonStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
buttonType | 'button' &#124; 'reset' &#124; 'submit' | 'button' | The button type.
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'default' &#124; 'error' &#124; 'info' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'warning' | 'default' | The color of the button.
disabled | boolean &#124; string | false | If `true`, the button is disabled.
disableFocusRipple | boolean &#124; string | false | not used
disableRipple | boolean &#124; string | false | not used
elevated | boolean &#124; string | false | If `true`, button is elevated.
endIcon | string | | The Material Icon name for an icon at the end of the button content.
fullWidth | boolean &#124; string | false | If `true`, the button will be the full width of its container.
hasParent | boolean &#124; string | false | Indicates the button has a parent that handles functionality.
link | string | | If provided, the rendered HTML element will be an `a` instead of a `button`.
newTab | boolean &#124; string | false | If the rendered HTML element is an `a`, setting this to `true` will open the link in a new tab. Only works if `link` is provided.
size | 'lg' &#124; 'md' &#124; 'sm' | 'md' |
startIcon | string | | The Material Icon name for an icon at the start of the button content.
title | string | | The value of the button title attribute
variant | 'contained' &#124; 'outlined' &#124; 'passive' &#123; 'text' | 'outlined' | The button variant.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-button-root | Styles applied to the root element.
colorInherit | .og-button-color-inherit | Styles applied if `color="inherit"`.
contained | .og-button-contained | Styles applied if `variant="contained"`.
containedColorError | .og-button-contained-color-error | Styles applied if `variant="contained"` and `color="error"`.
containedColorInfo | .og-button-contained-color-info | Styles applied if `variant="contained"` and `color="info"`.
containedColorPrimary | .og-button-contained-color-primary | Styles applied if `variant="contained"` and `color="primary"`.
containedColorSecondary | .og-button-contained-color-secondary | Styles applied if `variant="contained"` and `color="secondary"`.
containedColorSuccess | .og-button-contained-color-success | Styles applied if `variant="contained"` and `color="success"`.
containedColorWarning | .og-button-contained-color-warning | Styles applied if `variant="contained"` and `color="warning"`.
containedSizeLg | .og-button-contained-size-lg | Styles applied if `variant="contained"` and `size="lg"`.
containedSizeSm | .og-button-contained-size-sm | Styles applied if `variant="contained"` and `size="sm"`.
disabled | .og-button-disabled | Pseudo-class applied when `[disabled]="true"`.
disableElevation | .og-button-disable-elevation | Styles applied if `[disableElevation]="true"`.
endIcon | .og-button-end-icon | Styles applied if an endIcon is provided.
focusVisible | .og-button-focus-visible | Pseudo-class applied if button is keyboard focused.
fullWidth | .og-button-full-width | Styles applied if `[fullWidth]="true"`.
iconSizeLg | .og-button-icon-size-lg | Styles applied to the icon element if `size="lg"`.
iconSizeMd | .og-button-icon-size-md | Styles applied to the icon element if `size="md"`.
iconSizeSm | .og-button-icon-size-sm | Styles applied to the icon element if `size="sm"`.
label | .og-button-label | Styles applied to the child span that wraps the button content.
outlined | .og-button-outlined | Styles applied if `variant="outlined"`.
outlinedColorError | .og-button-outlined-color-error | Styles applied if `variant="outlined"` and `color="error"`.
outlinedColorInfo | .og-button-outlined-color-info | Styles applied if `variant="outlined"` and `color="info"`.
outlinedColorPrimary | .og-button-outlined-color-primary | Styles applied if `variant="outlined"` and `color="primary"`.
outlinedColorSecondary | .og-button-outlined-color-secondary | Styles applied if `variant="outlined"` and `color="secondary"`.
outlinedColorSuccess | .og-button-outlined-color-success | Styles applied if `variant="outlined"` and `color="success"`.
outlinedColorWarning | .og-button-outlined-color-warning | Styles applied if `variant="outlined"` and `color="warning"`.
outlinedSizeLg | .og-button-outlined-size-lg | Styles applied if `variant="outlined"` and `size="lg"`.
outlinedSizeSm | .og-button-outlined-size-sm | Styles applied if `variant="outlined"` and `size="sm"`.
passive | .og-button-passive | Styles applied if `variant="passive"`.
passiveColorError | .og-button-passive-color-error | Styles applied if `variant="passive"` and `color="error"`.
passiveColorInfo | .og-button-passive-color-info | Styles applied if `variant="passive"` and `color="info"`.
passiveColorPrimary | .og-button-passive-color-primary | Styles applied if `variant="passive"` and `color="primary"`.
passiveColorSecondary | .og-button-passive-color-secondary | Styles applied if `variant="passive"` and `color="secondary"`.
passiveColorSuccess | .og-button-passive-color-success | Styles applied if `variant="passive"` and `color="success"`.
passiveColorWarning | .og-button-passive-color-warning | Styles applied if `variant="passive"` and `color="warning"`.
passiveSizeLg | .og-button-passive-size-lg | Styles applied if `variant="passive"` and `size="lg"`.
passiveSizeSm | .og-button-passive-size-sm | Styles applied if `variant="passive"` and `size="sm"`.
sizeLg | .og-button-size-lg | Styles applied if `size="lg"`.
sizeSm | .og-button-size-sm | Styles applied if `size="sm"`.
startIcon | .og-button-start-icon | Styles applied if a start icon is provided.
text | .og-button-text | Styles applied if `variant="text"`.
textColorError | .og-button-text-color-error | Styles applied if `variant="text"` and `color="error"`.
textColorInfo | .og-button-text-color-info | Styles applied if `variant="text"` and `color="info"`.
textColorPrimary | .og-button-text-color-primary | Styles applied if `variant="text"` and `color="primary"`.
textColorSecondary | .og-button-text-color-secondary | Styles applied if `variant="text"` and 'color="secondary"`.
textColorSuccess | .og-button-text-color-success | Styles applied if `variant="text"` and `color="success"`.
textColorWarning | .og-button-text-color-warning | Styles applied if `variant="text"` and `color="warning"`.
textSizeLg | .og-button-text-size-lg | Styles applied if `variant="text"` and `size="lg"`.
textSizeSm | .og-button-text-size-sm | Styles applied if `variant="text"` and `size="sm"`.
