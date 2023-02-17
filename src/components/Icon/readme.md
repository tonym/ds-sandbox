# Icon
It's an icon. Works with both Material Icons and Font Awesome

**Selector:**
og-icon

**Use:**
`<og-icon></og-icon>`
Material: `<og-icon>material-icon-identifier</og-icon>`
Font Awesome: `<og-icon className="fa fa-icon-identifier"></og-icon>`

## Style object
```javascript
import IconStyle from '@opensesame/gemini/components/Icon';
```

## Module
```javascript
import { IconModule } from '@opensesame/gemini';
```

## Types
```javascript
import { IconProps } from '@opensesame/gemini';
import { IconClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { IconStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'error' &#124; 'info' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'warning' | 'inherit' | The icon color
fontSize | 'inherit' &#124; 'lg' &#124; 'md' &#124; 'sm' | 'md' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-icon-root | Styles applied to the root element.
colorError | .og-icon-color-error |
colorInfo | .og-icon-color-info |
colorInherit | .og-icon-color-primary |
colorPrimary | .og-icon-color-primary |
colorSecondary | .og-icon-color-secondary |
colorSuccess | .og-icon-color-success |
colorWarning | .og-icon-color-warning |
fontSizeInherit | .og-icon-font-size-inherit |
fontSizeLg | .og-icon-font-size-lg |
fontSizeMd | .og-icon-font-size-md |
fontSizeSm | .og-icon-font-size-sm |
