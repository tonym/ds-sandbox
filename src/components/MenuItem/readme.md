# MenuItem

**Selector:**
og-menu-item

**Use:**
`<og-menu-item></og-menu-item>`

## Style object
```javascript
import MenuItemStyle from '@opensesame/gemini/components/MenuItem';
```

## Module
```javascript
import { MenuItemModule } from '@opensesame/gemini';
```

## Types
```javascript
import { MenuItemProps } from '@opensesame/gemini';
import { MenuItemClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { MenuItemStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
icon | string | |
iconStyle | 'filled' &#124; 'outlined' &#124; 'rounded' &#124; 'sharp' &#124; 'twotone' | 'filled' |
selected | boolean &#124; string | false |
selectedIcon | string | |
selectedIconStyle | 'filled' &#124; 'outlined' &#124; 'rounded' &#124; 'sharp' &#124; 'twotone' | 'filled' |
title | string | |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-menu-item-root | Styles applied to the root element.
selected | .og-menu-item-selected |
subtitle | .og-menu-item-subtitle |
