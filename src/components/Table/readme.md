# Table

**Selector:**
og-table

**Use:**
`<og-table></og-table>`

## Style object
```javascript
import TableStyle from '@opensesame/gemini/components/Table';
```

## Module
```javascript
import { TableModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TableProps } from '@opensesame/gemini';
import { TableClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TableStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
padding | 'checkbox' &#124; 'default' &#124; 'none' | | If provided, values are passed to the TableCell (`TH` and `TD`) children.
size | 'medium' &#124; 'small' | | If provided, values are passed to the TableCell (`TH` and `TD`) children.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-table-root | Styles applied to the root element.
