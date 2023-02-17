# Dialog

**Selector:**
og-dialog

**Use:**
`<og-dialog></og-dialog>`

## Style object
```javascript
import DialogStyle from '@opensesame/gemini/components/Dialog';
```

## Module
```javascript
import { DialogModule } from '@opensesame/gemini';
```

## Types
```javascript
import { DialogProps } from '@opensesame/gemini';
import { DialogClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { DialogStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
centered | boolean  &#124; string | `true` | If `true`, the dialog will be centered in the viewport, if `false` the dialog will be positioned absolutely. Use `false` if you want to position the dialog in a container, such as for a tooltip or dropdown.
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
disableEscapeKey | boolean  &#124; string | `false` | If `true` an onEscapeKeyDown event is not emitted.
disableScrimClick | boolean  &#124; string | `false` | If `true` an onScrimClick event is not emitted.
elevation | number  &#124; string | 0 | `elevation` prop passed to the underlying Paper component.
open | boolean  &#124; string | `false` | If `true` the dialog is open, and visible on the page.
radius | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' | 'sm' | The border radius for rounded corners.
square | boolean  &#124; string | `false` | `square` prop passed to the underlying Paper component.
withScrim | boolean  &#124; string | `true` | If `true` a scrim is placed between the dialog and the page. Set to `false` to hide the scrim for things like tooltips, dropdowns, etc.

## Events
Name | Event | Description
---- | ----- | -----------
dialogEscapeKeyDown | `KeyboardEvent('keydown', { key: 'esc' })` | Event emmitted when the `esc` key is pressed.
dialogScrimClick | `MouseEvent('click')` | Event emmitted when the scrim is clicked. Not available if `withScrim = false`.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-dialog-root | Styles applied to the root element.
centered | .og-dialog-centered | Styles applied if `centered = true`.
