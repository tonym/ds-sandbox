# Accordion

**Selector:**
og-accordion

**Use:**
`<og-accordion></og-accordion>`

## Style object
```javascript
import AccordionStyle from '@opensesame/gemini/components/Accordion';
```

## Module
```javascript
import { AccordionModule } from '@opensesame/gemini';
```

## Types
```javascript
import { AccordionProps } from '@opensesame/gemini';
import { AccordionClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { AccordionStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
defaultExpanded | boolean &#124; string | false | If `true`, accordion will begin expanded
showControl | boolean &#124; string | true |
summary | string | '' |
summaryEndIcon | string | '' |
summaryStartIcon | string | '' |
summaryTypographyFontWeight | 'bold' &#124; 'inherit' &#124; 'light' &#124; 'medium' &#124; 'regular | 'regular' |
summaryTypographyVariant | TypographyVariant | 'body2' |
title | string | '' |
titleEndIcon | string | '' |
titleStartIcon | string | ''
titleTypographyFontWeight | 'bold' &#124; 'inherit' &#124; 'light' &#124; 'medium' &#124; 'regular | 'medium' |
titleTypographyVariant | TypographyVariant | 'body2' |

## Events
Name | Props | Description
---- | ----- | -----------
accordionClick | `{ component: string, expanded: boolean, event: Event }` | Event emitted when Accordion control is clicked

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-accordion-root | Styles applied to the root element.
content | .og-accordion-content |
contentExpanded | .og-accordion-content-expanded |
control | .og-accordion-control |
controlExpanded | .og-accordion-control-expanded |
controlShown | .og-accordion-control-shown |
endIcon | .og-accordion-end-icon |
flex | .og-accordion-flex |
startIcon | .og-accordion-start-icon |
summary | .og-accordion-summary |
title | .og-accordion-title |
