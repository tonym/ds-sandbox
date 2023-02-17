# Divider
A horizontal, or vertical line.

**Selector:**
og-divider

**Use:**
`<og-divider></og-divider>`

## Style object
```javascript
import DividerStyle from '@opensesame/gemini/components/Divider';
```

## Module
```javascript
import { DividerModule } from '@opensesame/gemini';
```

## Types
```javascript
import { DividerProps } from '@opensesame/gemini';
import { DividerClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { DividerStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
absolute | boolean &#124; string | false | If `true`, the divider will have absolute position
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
light | boolean &#124; string | false | If `true`, a lighter color will be used.
orientation | 'horizontal' &#124; 'vertical' | 'horizontal' | The direction of the divider.
variant | 'fullWidth' &#124; 'inset' &#124; 'middle' | 'fullWidth' | The divider variant.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-divider-root | Styles applied to the root element.
absolute | .og-divider-absolute | Styles applied if `[absolute]="true"`.
inset | .og-divider-inset | Styles applied if `variant="inset"`.
middle | .og-divider-middle | Styles applied if `variant="middle"`.
vertical | .og-divider-vertical | Styles applied if `orientation="vertical"`.
