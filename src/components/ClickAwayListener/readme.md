# ClickAwayListener
Captures click and escape key outside the component. Useful for dialogs, menus, etc. that should close on escape or click away.

**Selector:**
og-click-away-listener

**Use:**
`<og-click-away-listener></og-click-away-listener>`

## Style object
```javascript
import ClickAwayListenerStyle from '@opensesame/gemini/components/ClickAwayListener';
```

## Module
```javascript
import { ClickAwayListener } from '@opensesame/gemini';
```

## Types
```javascript
import { ClickAwayListenerProps } from '@opensesame/gemini';
import { ClickAwayListenerClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { ClickAwayListenerStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
shouldHandle | boolean | `true` | If `true`, will emit an event if all other conditions are met

## Events
Name | Props | Description
---- | ----- | -----------
clickAwayListenerClick | `{ component: string; source: string; event: Event }` | Event emitted when component is clicked

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-click-away-handler-root | Styles applied to the root element.
