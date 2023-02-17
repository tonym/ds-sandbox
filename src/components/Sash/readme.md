# Sash
A highlight across the corner of a card or other HTML element.

**Selector:**
og-sash

**Use:**
`<og-sash></og-sash>`

## Style object
```javascript
import SashStyle from '@opensesame/gemini/components/Sash';
```

## Module
```javascript
import { SashModule } from '@opensesame/gemini';
```

## Types
```javascript
import { SashProps } from '@opensesame/gemini';
import { SashClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { SashStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
label | string &#124; number | | The sash label

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-sash-root | Styles applied to the root element.
typography | .og-sash-typography | Sash specific typography styles.
