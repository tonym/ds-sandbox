# Drawer

**Selector:**
og-drawer

**Use:**
`<og-drawer></og-drawer>`

## Style object
```javascript
import DrawerStyle from '@opensesame/gemini/components/Drawer';
```

## Module
```javascript
import { DrawerModule } from '@opensesame/gemini';
```

## Types
```javascript
import { DrawerProps } from '@opensesame/gemini';
import { DrawerClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { DrawerStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
anchor | 'bottom' &#124; 'left' &#124; 'right' &#124; 'top' | 'left' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
elevation | number &#124; string | 16 |
open | boolean &#124; string | false |
variant | 'permanent' &#124; 'persistent' &#124; 'temporary' | 'temporary' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-drawer-root | Styles applied to the root element.
permanent | .og-drawer-permanent |
permanentBottom | .og-drawer-permanent-bottom |
permanentLeft | .og-drawer-permanent-left |
permanentRight | .og-drawer-permanent-right |
permanentTop | .og-drawer-permanent-top |
persistent | .og-drawer-persistent |
persistentBottom | .og-drawer-persistent-bottom |
persistentLeft | .og-drawer-persistent-left |
persistentRight | .og-drawer-persistent-right |
persistentTop | .og-drawer-persistent-top |
