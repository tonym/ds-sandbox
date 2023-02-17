# Menu

**Selector:**
og-menu

**Use:**
`<og-menu></og-menu>`

## Style object
```javascript
import MenuStyle from '@opensesame/gemini/components/Menu';
```

## Module
```javascript
import { MenuModule } from '@opensesame/gemini';
```

## Types
```javascript
import { MenuProps } from '@opensesame/gemini';
import { MenuClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { MenuStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
elevation | number &#124; string | 1 | Elevation applied to menu.
open | boolean &#124; string | false |
variant | 'dark" &#124; 'light' | 'light' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-menu-root | Styles applied to the root element.
dark | .og-menu-dark |
light | .og-menu-light |
open | .og-menu-open |
paperRoot | .og-menu-paper-root | override class passed to paper classes.root
