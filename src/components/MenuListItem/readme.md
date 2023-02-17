# MenuListItem

**Selector:**
og-menu-list-item

**Use:**
`<og-menu-list-item></og-menu-list-item>`

## Style object
```javascript
import MenuListItemStyle from '@opensesame/gemini/components/MenuListItem';
```

## Module
```javascript
import { MenuListItemModule } from '@opensesame/gemini';
```

## Types
```javascript
import { MenuListItemProps } from '@opensesame/gemini';
import { MenuListItemClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { MenuListItemStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
hover | boolean &#124; string | true |
icon | string | |
iconStyle | 'filled' &#124; 'outlined' &#124; 'rounded' &#124; 'sharp' &#124; 'twotone' | 'filled' |
selected | boolean &#124; string | false |
subtitle | string | |
title | string | |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-menu-list-item-root | Styles applied to the root element.
selected | .og-menu-list-item-selected |
selectedBackground | .og-menu-list-item-selected-background |
subtitle | .og-menu-list-item-subtitle |
