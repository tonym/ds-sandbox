# Hidden

**Selector:**
og-hidden

**Use:**
`<og-hidden></og-hidden>`

## Style object
```javascript
import HiddenStyle from '@opensesame/gemini/components/Hidden';
```

## Module
```javascript
import { HiddenModule } from '@opensesame/gemini';
```

## Types
```javascript
import { HiddenProps } from '@opensesame/gemini';
import { HiddenClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { HiddenStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
down | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' | |
only | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' | |
up | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' | |
variant | 'css' &#124; 'js' | 'js' | Variant `js` is prefered. Use variant `css` when rendering on the server.


## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-hidden-root | Styles applied to the root element.
