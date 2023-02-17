# CardActions
The card action bar.

**Selector:**
og-card-actions

**Use:**
`<og-card-actions></og-card-actions>`

## Style object
```javascript
import CardActionsStyle from '@opensesame/gemini/components/CardActions';
```

## Module
```javascript
import { CardActionsModule } from '@opensesame/gemini';
```

## Types
```javascript
import { CardActionsProps } from '@opensesame/gemini';
import { CardActionsClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { CardActionsStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
backgroundColor | 'primary' &#124; 'secondary' &#124; 'error' &#124; string | | The background color. It can be a color intention, (primary, secondary, error) or a color string. Passing a string is a way to add a background gradient.
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
disableSpacing | boolean | false | If `true`, additional margins are removed from actions.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-card-actions-root | Styles applied to the root element.
spacing | .og-card-actions-spacing | Styles applied if `[disableSpacing]="false"`.
