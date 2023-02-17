# Scrim
The backdrop to a modal.

**Selector:**
og-scrim

**Use:**
`<og-scrim></og-scrim>`

## Style object
```javascript
import ScrimStyle from '@opensesame/gemini/components/Scrim';
```

## Module
```javascript
import { ScrimModule } from '@opensesame/gemini';
```

## Types
```javascript
import { ScrimProps } from '@opensesame/gemini';
import { ScrimClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { ScrimStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
open | boolean &#124; string | false |
position | 'absolute' &#124; 'fixed' | 'fixed' | The CSS position for the scrim.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-scrim-root | Styles applied to the root element.
open | .og-scrim-open |
positionAbsolute | .og-scrim-position-absolute |
positionFixed | .og-scrim-position-fixed |
