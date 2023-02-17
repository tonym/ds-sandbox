# Tab
Visual Tab for Tab secondary nav.

**Selector:**
og-tab

**Use:**
`<og-tab></og-tab>`

## Style object
```javascript
import TabStyle from '@opensesame/gemini/components/Tab';
```

## Module
```javascript
import { TabModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TabProps } from '@opensesame/gemini';
import { TabClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TabStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
bottomPadding | 'md' &#124; 'sm' | 'md' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'inherit', 'primary', 'secondary' | 'inherit' | identify the color of the tabs
disabled | boolean | false | Identify if the tab should appear disabled
selected | boolean | false | Identify if the tab should display as selected
sidePadding | 'lg' &#124; 'md' &#124; 'sm' | 'md' |
size | 'md' &#124; 'sm' | 'md' |
wrapped | boolean | false | Identify if the tab should force a width and wrap the text

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-tab-root | Styles applied to the root element.
bottomPaddingMd | .og-tab-bottom-padding-md |
bottomPaddingSm | .og-tab-bottom-padding-sm |
comes from (secondary)
disabled | .og-tab-disabled |   Identifies where the tab color comes from (the disabled colors styles)
selected | .og-tab-selected |
selectedInherit | .og-tab-selected-inherit |
selectedPrimary | .og-tab-selected-primary |
selectedSecondary | .og-tab-selected-secondary |
sidePaddingLg | .og-tab-side-padding-lg |
sidePaddingMd | .og-tab-side-padding-md |
sidePaddingSm | .og-tab-side-padding-sm |
sizeMd | .og-tab-size-md |
sizeSm | .og-tab-size-sm |
wrapped | .og-tab-wrapped | Forced the tab content to wrap at max width
wrapper | .og-tab-wrapper | Standard styles for the wrapper of the text in the tab
