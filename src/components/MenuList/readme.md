# MenuList

**Selector:**
og-menu-list

**Use:**
`<og-menu-list></og-menu-list>`

## Style object
```javascript
import MenuListStyle from '@opensesame/gemini/components/MenuList';
```

## Module
```javascript
import { MenuListModule } from '@opensesame/gemini';
```

## Types
```javascript
import { MenuListProps } from '@opensesame/gemini';
import { MenuListClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { MenuListStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
elevation | number &#124; string | 0 |
fullWidth | boolean &#124; string | true |
outlined | boolean &#124; string | false |
square | boolean &#124; string | true |
variant | 'dark" &#124; 'light' | 'light' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-menu-list-root | Styles applied to the root element.
dark | .og-menu-list-dark |
fullWidth | .og-menu-list-full-width |
light | .og-menu-list-light |
paperRoot | .og-menu-list-paper-root | override class passed to paper classes.root
