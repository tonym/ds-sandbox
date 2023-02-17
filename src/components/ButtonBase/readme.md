# ButtonBase
The foundation of all buttons and things that can be buttons.

**Selector:**
og-button-base

**Use:**
`<og-button-base></og-button-base>`

## Style object
```javascript
import ButtonBaseStyle from '@opensesame/gemini/components/ButtonBase';
```

## Module
```javascript
import { ButtonBaseModule } from '@opensesame/gemini';
```

## Types
```javascript
import { ButtonBaseProps } from '@opensesame/gemini';
import { ButtonBaseClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { ButtonBaseStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
buttonType | 'button' &#124; 'reset' &#124; 'submit' | 'button' | The button type.
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
disabled | boolean &#124; string | false | Pseudo-class applied if `[disabled]="true"`.
hasParent | boolean &#124; string | false | Indicates the button has a parent that handles funtionality.
link | string | | If provided, the rendered HTML element will be an `a` instead of a `button`.
newTab | boolean &#124; string | false | If the rendered HTML element is an `a`, setting this to `true` will open the link in a new tab. Only works if `link` is provided.
title | string | | Passed to the button `title` attribute.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-button-base-root | Styles applied to the root element.
