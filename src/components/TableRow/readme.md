# TableRow

**Selector:**
og-table-row

**Use:**
`<og-table-row></og-table-row>`

## Style object
```javascript
import TableRowStyle from '@opensesame/gemini/components/TableRow';
```

## Module
```javascript
import { TableRowModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TableRowProps } from '@opensesame/gemini';
import { TableRowClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TableRowStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
hover | boolean &#124; string | | Should the row hover on mouseover?
selected | boolean &#124; string | | Should the row be highlighted as selected?

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-table-row-root | Styles applied to the root element.
hover | .og-table-row-hover |
selected | .og-table-row-selected |
