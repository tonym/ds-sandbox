# AppBar
The application's header (or footer)

**Material documentation:**
[AppBars](https://material.io/components/app-bars-top/)

**Selector:**
og-app-bar

**Use:**
`<og-app-bar></og-app-bar>`

## Style object
```javascript
import AppBarStyle from '@opensesame/gemini/components/AppBar';
```

## Module
```javascript
import { AppBarModule } from '@opensesame/gemini';
```

## Types
```javascript
import { AppBarProps } from '@opensesame/gemini';
import { AppBarClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { AppBarStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
backgroundColor | 'default' &#124; 'error' &#124; 'info' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'transparent' &#124; 'warning' | 'primary' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
elevated | boolean &#124; string | true | If true, the AppBar will be elevated
placement | 'bottom' &#124; 'top' | 'top' | Place the AppBar at either the top or bottom of the container. Only applies if `position` is 'absolute' or 'fixed'.
position | 'absolute' &#124; 'fixed' &#124; 'relative' &#124; 'static' | 'fixed' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-app-bar-root | Styles applied to the root element.
backgroundColorDefault | .og-app-bar-background-color-default |
backgroundColorError | .og-app-bar-background-color-error |
backgroundCOlorInfo | .og-app-bar-background-color-info |
backgroundColorInherit | .og-app-bar-background-color-inherit |
backgroundColorPrimary | .og-app-bar-background-color-primary |
backgroundColorSecondary | .og-app-bar-background-color-secondary |
backgroundColorSuccess | .og-app-bar-background-color-success |
backgroundColorWarning | .og-app-bar-background-color-warning |
elevatedBottom | .og-app-bar-elevated-bottom | Styles applied when `elevated = true;` and `placement = 'top';`.
elevatedTop | .og-app-bar-elevated-top | Styles applied when `elevated = true;` and `placement = 'bottom';`.
placementBottom | .og-app-bar-placement-bottom |
placementTop | .og-app-bar-placement-top |
positionAbsolute | .og-app-bar-position-absolute |
positionFixed | .og-app-bar-postion-fixed |
positionRelative | .og-app-bar-position-relative |
positionStatic | .og-app-bar-position-static |
