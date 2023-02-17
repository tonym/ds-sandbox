# ButtonGroup

**Selector:**
og-button-group

**Use:**
`<og-button-group></og-button-group>`

## Style object
```javascript
import ButtonGroupStyle from '@opensesame/gemini/components/ButtonGroup';
```

## Module
```javascript
import { ButtonGroupModule } from '@opensesame/gemini';
```

## Types
```javascript
import { ButtonGroupProps } from '@opensesame/gemini';
import { ButtonGroupClasses } from '@opensesame/gemini';
```

## Styles
```javascript
import { ButtonGroupStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
buttonType | 'button' &#124; 'reset' &#124; 'submit' | 'button' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'default' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' |
disabled | boolean &#124; string | false |
elevated | boolean &#124; string | false |
fullWidth | boolean &#124; string | false |
size | 'lg' &#124; 'md' &#124; 'sm' | 'md' |
variant | 'contained' &#124; 'outlined' &#124; 'text' | 'outlined' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-button-group-root | Styles applied to the root element.
buttonGroupFirst | .og-button-group-button-group-first |
buttonGroupLast | .og-button-group-button-group-last |
buttonGroupMiddle | .og-button-group-button-group-middle |
fullWidth | .og-button-group-full-width |
