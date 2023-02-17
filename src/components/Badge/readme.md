# Badge
Badge is a notification marker

**Selector:**
og-badge

**Use:**
`<og-badge></og-badge>`

## Style object
```javascript
import BadgeStyle from '@opensesame/gemini/components/Badge';
```

## Module
```javascript
import { BadgeModule } from '@opensesame/gemini';
```

## Types
```javascript
import { BadgeProps } from '@opensesame/gemini';
import { BadgeClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { BadgeStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
anchorOrigin | 'bottomLeft' &#124; 'bottomRight' &#124; 'topLeft' &#124; 'topRight' | 'topRight' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'error' &#124; 'info' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'warning' | 'primary' |
label | number &#124; string | 0 | What displays on the badge. Number or string is accepted, but must resolve to a number.
max | number &#124; string | 99 | Label greater than max will show max with a plus sign.
overlap | 'circle' &#124; 'rectangle' | 'rectangle' | Is the badge showing on top of a circle or a rectangle?
showZero | boolean &#124; string | false | If true, badge will show when label is 0.
variant | 'dot' &#124; 'standard' | 'standard' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-badge-root | Styles applied to the root element.
anchorOriginBottomLeftCircle | .og-badge-anchor-origin-bottom-left-circle |
anchorOriginBottomLeftRectangle | .og-badge-anchor-origin-bottom-left-rectangle |
anchorOriginBottomRightCircle | .og-badge-anchor-origin-bottom-right-circle |
anchorOriginBottomRightRectangle | .og-badge-anchor-origin-bottom-right-rectangle |
anchorOriginTopLeftCircle | .og-badge-anchor-origin-top-left-circle |
anchorOriginTopLeftRectangle | .og-badge-anchor-origin-top-left-rectangle |
anchorOriginTopRightCircle | .og-badge-anchor-origin-top-right-circle |
anchorOriginTopRightRectangle | .og-badge-anchor-origin-top-right-rectangle |
badge | .og-badge-badge |
colorError | .og-badge-color-error |
colorInfo | .og-badge-color-info |
colorPrimary | .og-badge-color-primary |
colorSecondary | .og-badge-color-secondary |
colorSuccess | .og-badge-color-success |
colorWarning | .og-badge-color-warning |
dot | .og-badge-dot
