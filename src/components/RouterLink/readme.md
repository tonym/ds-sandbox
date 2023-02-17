# RouterLink
Button click/tap animation

**Selector:**
og-router-link

**Use:**
`<og-router-link></og-router-link>`

## Style object
```javascript
import RouterLinkStyle from '@opensesame/gemini/components/RouterLink';
```

## Module
```javascript
import { RouterLinkModule } from '@opensesame/gemini';
```

## Types
```javascript
import { RouterLinkProps } from '@opensesame/gemini';
import { RouterLinkClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { RippleStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'error' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'textPrimary' &#124; 'textSecondary' | 'primary' | The link color.
display | 'block' &#124; 'initial' &#124; 'inline' | 'inline' | The CSS display property for the router link.
fragment | string | | A URL fragment for in page navigation. The fragment identifies an element with the same ID.
link | string &#124; any[] | | The Angular route.
preserveFragment | boolean &#124; string | false | If `true` will preserve the fragment across navigations.
queryParams | { [k: string]: any } | | Parts of a query string.
queryParamsHandling | 'merge' &#124; 'preserve' &#124; '' | '' | Query params handling options.
replaceUrl | boolean &#124; string | false | If `true`, will replace the current state in history.
skipLocationChange | boolean &#124; string | false | If `true`, navigates without pushing a new state into history.
state | { [k: string]: any } | | Developer defined state that can be passed to any navigation.
typographyClasses | { [k in keyof TypographyClasses]?: string } | | Classes passed to the underlying typography component.
underline | 'always' &#124; 'hover' &#124; 'none' | 'hover' | The link's text decoration.
variant | TypographyVariants | 'inherit' | The variant of the underlying typography component.


## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-router-link-root | Styles applied to the root element.
underlineAlways | .og-router-link-underline-always | Styles applied when `underline="always"`.
underlineHover | .og-router-link-underline-hover | Styles applied when `underline="hover"`.
underlineNone | .og-router-link-underline-none | Styles applied when `underline="none"`.
