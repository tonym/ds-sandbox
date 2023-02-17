# Chip
Chip appearance

**Selector:**
og-chip

**Use:**
`<og-chip></og-chip>`

## Style object
```javascript
import ChipStyle from '@opensesame/gemini/components/Chip';
```

## Module
```javascript
import { ChipModule } from '@opensesame/gemini';
```

## Types
```javascript
import { ChipProps } from '@opensesame/gemini';
import { ChipClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { ChipStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
clickable | boolean &#124; string  | `false` | Should this chip be clickable?
color | 'dark' &#124; 'error' &#124; 'info' &#124; 'light' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'warning' | 'light' | Color of chip.
deletable | boolean &#124; string | `false` | Display the icon for deleting/removing this chip.
disabled | boolean &#124; string | false | Identify if this chip should appear as disabled
icon | string | | The Material icon to display
outlined | boolean &#124; string | `false` |
size | 'md' &#124; 'sm' | 'md' |
square | boolean &#124; string | `false` |
uppercase | boolean &#124; string | `false` |

## Events
Name | Props | Description
---- | ----- | -----------
deleteClick | `{ component: string, delete: boolean, event: Event }` | Event emitted when delete control is clicked

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-chip-root | Styles applied to the root element.
clickable | .og-chip-clickable |
colorSolidDark | .og-chip-color-solid-dark |
colorSolidError | .og-chip-color-solid-error |
colorSolidInfo | .og-chip-color-solid-info |
colorSolidLight | .og-chip-color-solid-light |
colorSolidPrimary | .og-chip-color-solid-primary |
colorSolidSecondary | .og-chip-color-solid-secondary |
colorSolidSuccess | .og-chip-color-solid-success |
colorSolidWarning | .og-chip-color-solid-warning |
colorOutlinedDark | .og-chip-color-outlined-dark |
colorOutlinedError | .og-chip-color-outlined-error |
colorOutlinedInfo | .og-chip-color-outlined-info |
colorOutlinedLight | .og-chip-color-outlined-light |
colorOutlinedPrimary | .og-chip-color-outlined-primary |
colorOutlinedSecondary | .og-chip-color-outlined-secondary |
colorOutlinedSuccess | .og-chip-color-outlined-success |
colorOutlinedWarning | .og-chip-color-outlined-warning |
deleteIcon | .og-chip-delete-icon |
deleteIconColor | .og-chip-delete-icon-color |
deleteIconColorLight | .og-chip-delete-icon-color-light |
deleteIconSizeMd | .og-chip-delete-icon-size-md |
deleteIconSizeSm | .og-chip-delete-icon-size-sm |
disabled | .og-chip-disabled |
icon | .og-chip-icon |
iconSizeMd | .og-chip-icon-size-md |
iconSizeSm | .og-chip-icon-size-sm |
label | .og-chip-label |
labelSm | .og-chip-label-small |
sm | .og-chip-small |
square | .og-chip-square |
uppercase | .og-chip-uppercase |

## Control classes
Class | Control
----- | -------
.og-chip-delete-icon | Delete icon
