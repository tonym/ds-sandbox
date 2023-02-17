# CardActionArea
The card action area turns the card into a button.

**Selector:**
og-card-action-area

**Use:**
`<og-card-action-area></og-card-action-area>`

## Style object
```javascript
import CardActionAreaStyle from '@opensesame/gemini/components/CardActionArea';
```

## Module
```javascript
import { CardActionAreaModule } from '@opensesame/gemini';
```

## Types
```javascript
import { CardActionAreaProps } from '@opensesame/gemini';
import { CardActionAreaClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { CardActionAreaStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
link | string | | If provided, the rendered HTML element will be an `a` instead of a `button`.
newTab | boolean | false | If the rendered HTML element is an `a`, setting this to `true` will open the link in a new tab. Only works if `link` is provided.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-card-action-area-root | Styles applied to the root element.
focusHighlight | .og-card-action-area-focus-highlight | Styles applied to the overlay that covers the action area when keyboard focused.
focusVisible | .og-card-action-area-focus-visible | Pseudo-class applied when keyboard focused.
