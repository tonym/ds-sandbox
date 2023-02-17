# Pagination

**Selector:**
og-pagination

**Use:**
`<og-pagination></og-pagination>`

## Style object
```javascript
import PaginationStyle from '@opensesame/gemini/components/Pagination';
```

## Module
```javascript
import { PaginationModule } from '@opensesame/gemini';
```

## Types
```javascript
import { PaginationProps } from '@opensesame/gemini';
import { PaginationClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { PaginationStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'default' &#124; 'primary' &#124; 'secondary' | 'default' |
count | number &#124; string | 1 | The total number of pages.
page | string &#124; number | 1 | The current displayed page.
pageClamp | boolean &#124; string | true | If true, page number will be clamped to the range between 1 and count. If page is less than one it will display one, if greater than count, it will display count.
showFirstButton | boolean &#124; string | false |
showLastButton | boolean &#124; string | false |
showNextButton | boolean &#124; string | true |
showPreviousButton | boolean &#124; string | true |
size | 'md' &#124; 'sm' | 'sm' |

## Events
Name | Props | Description
---- | ----- | -----------
onPageChange | `{ component: string, event: Event, page: number }` | Event emitted when a new page is selected.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-pagination-root | Styles applied to the root element.
buttonBase | .og-pagination-button-base | Styles applied to the button base.
itemContainer | .og-pagination-item-container |
itemContainerMd | .og-pagination-item-container-md |
itemContainerSm | .og-pagination-item-container-sm |
selectedDefault | .og-pagination-selected-default |
selectedPrimary | .og-pagination-selected-primary |
selectedSecondary | .og-pagination-selected-secondary |

## Control classes
Class | Control
----- | -------
.og-pagination-button-1...n | Page number control
.og-pagination-button-first | "First" button control
.og-pagination-button-last | "Last" button control
.og-pagination-button-next | "Next" button control
.og-pagination-button-previous | "Previous" button control
