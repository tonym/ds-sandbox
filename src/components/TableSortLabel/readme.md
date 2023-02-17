# TableSortLabel

**Selector:**
og-table-sort-label

**Use:**
`<og-table-sort-label></og-table-sort-label>`

## Style object
```javascript
import TableSortLabelStyle from '@opensesame/gemini/components/TableSortLabel';
```

## Module
```javascript
import { TableSortLabelModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TableSortLabelProps } from '@opensesame/gemini';
import { TableSortLabelClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TableSortLabelStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
active | boolean &#124; string | false |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
direction | 'asc' &#124; 'desc' | 'asc' |
hideSortIcon | boolean &#124; string | false | If true, sort icon does not appear on hover.
sortIcon | string | 'arrow_downward' | The icon to use for sort direction. Sort direction uses a single icon and rotates it. Default icon should point down.
sortIconPostion | 'left' &#124; 'right' | 'right'
sortIconStyle | 'filled' &#124; 'outlined' &#124; 'rounded' &#124; 'sharp' &#124; 'twotone' | 'filled'

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-table-sort-label-root | Styles applied to the root element.
active | .og-table-sort-label-active |
hideSortIcon | .og-table-sort-label-hide-sort-icon |
icon | .og-table-sort-label-icon |
iconDirectionAsc | .og-table-sort-label-icon-direction-asc |
iconDirectionDesc | .og-table-sort-label-icon-direction-desc |
