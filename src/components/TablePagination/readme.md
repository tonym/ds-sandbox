# TablePagination

**Selector:**
og-table-pagination

**Use:**
`<og-table-pagination></og-table-pagination>`

## Style object
```javascript
import TablePaginationStyle from '@opensesame/gemini/components/TablePagination';
```

## Module
```javascript
import { TablePaginationModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TablePaginationProps } from '@opensesame/gemini';
import { TablePaginationClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TablePaginationStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
nextButtonTitle | string | 'Next page' | Passed to the next button `title` attribute.
page | string &#124; number | 1 | The current displayed page.
previousButtonTitle | string | 'Previous page' | Passed to the previous button `title` attribute.
rows | string &#124; number | 0 | The total number of rows in the displayed data set.
rowsPerPage | string &#124; number | 10 | The number of rows to display for a page.

## Events
Name | Props | Description
---- | ----- | -----------
onPageChange | `{ component: string, event: Event, page: number }` | Event emitted when a new page is selected.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-table-pagination-root | Styles applied to the root element.
pageCountLabel | .og-table-pagination-page-count-label |

## Control classes
Class | Control
----- | -------
.og-table-pagination-button-next | "Next" button control
.og-table-pagination-button-previous | "Previous" button control
