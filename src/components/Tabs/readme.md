# Tabs
Tabs

**Selector:**
og-tabs

**Use:**
`<og-tabs></og-tabs>`

## Style object
```javascript
import TabsStyle from '@opensesame/gemini/components/Tabs';
```

## Module
```javascript
import { TabsModule } from '@opensesame/gemini';
```

## Types
```javascript
import { TabsProps } from '@opensesame/gemini';
import { TabsClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { TabsStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
activeTab | string &#124; number | -1 | The active tab. Use `-1` for no active tab
ariaLabel | string | | `ariaLabel` content
ariaLabelledby | string | `ariaLabelledby` content
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
centered | boolean &#124; string | true | Identify if the tabs will be centered within the tab area
color | 'primary' &#124; 'secondary' | 'inherit' | identify the color of the tabs
selfSelect | boolean &#124; string | true | Should the component select tabs automatically

## Events
Name | Props | Description
---- | ----- | -----------
tabClick | `{ component: string, activeTab: number }` | Event emitted when a Tab is clicked


## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-tabs-root | Styles applied to the root element.
centered | .og-tabs-centered |
indicator | .og-tabs-indicator |
indicatorColorInherit | .og-tabs-indicator-color-primary |
indicatorColorPrimary | .og-tabs-indicator-color-primary |
indicatorColorSecondary | .og-tabs-indicator-color-secondary |
selected | .og-tabs-selected |
