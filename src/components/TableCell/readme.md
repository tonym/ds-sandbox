# TableCell

**Selector:**
og-table-cell

**Use:**
`<og-table-cell></og-table-cell>`

## Style object
```javascript
import TableCellStyle from '@opensesame/gemini/components/TableCell';
```

## Module
```javascript
import { TableCellModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TableCellProps } from '@opensesame/gemini';
import { TableCellClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TableCellStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
align | 'center' &#124; 'inherit' &#124; 'justify' &#124; 'left' &#124; 'right' | 'inherit' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
element | 'td' &#124; 'th' | 'td' |
padding | 'checkbox' &#124; 'default' &#124; 'none' | 'default'
size | 'md' &#124; 'sm' | 'md' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-table-cell-root | Styles applied to the root element.
alignCenter | .og-table-cell-align-center |
alignInherit | .og-table-cell-align-inherit |
alignJustify | .og-table-cell-align-justify |
alignLeft | .og-table-cell-align-left |
alignRight | .og-table-cell-align-right |
paddingCheckboxMd | .og-table-cell-padding-checkbox-md |
paddingCheckboxSm | .og-table-cell-padding-checkbox-sm |
paddingDefaultMd | .og-table-cell-padding-default-md |
paddingDefaultSm | .og-table-cell-padding-default-sm |
paddingNone | .og-table-cell-padding-none |
