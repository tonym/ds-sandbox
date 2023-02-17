# Link
Create an HTML link.

**Selector:**
og-link

**Use:**
`<og-link></og-link>`

## Style object
```javascript
import LinkStyle from '@opensesame/gemini/components/Link';
```

## Module
```javascript
import { LinkModule } from '@opensesame/gemini';
```

## Types
```javascript
import { LinkProps } from '@opensesame/gemini';
import { LinkClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { LinkStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'error' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'textPrimary' &#124; 'textSecondary' | 'primary' | The link color
display | 'block' &#124; 'inline' &#124; 'inlineBlock' | 'inline' | The CSS display property for the link.
link | string | | The link destination (href).
newTab | boolean &#124; string | false | If `true`, link will open in a new tab.
typographyClasses | { [k in keyof TypographyClasses]?: string } | | Classes passed to the underlying typography component.
underline | 'always' &#124; 'hover' &#124; 'none' | 'none' | The link's text decoration.
variant | TypographyVariants | 'inherit' | The variant of the underlying typography component.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-link-root | Styles applied to the root element.
colorError | .og-link-color-error |
colorInherit | .og-link-color-inherit |
colorPrimary | .og-link-color-primary |
colorSecondary | .og-link-color-secondary |
colorTextPrimary | .og-link-color-text-primary |
colorTextSecondary | .og-link-color-text-secondary |
displayBlock | .og-link-display-block |
displayInline | .og-link-display-inline |
displayInlineBlock | .og-link-display-inline-block |
underlineAlways | .og-link-underline-always | Styles applied when `underline="always"`.
underlineHover | .og-link-underline-hover | Styles applied when `underline="hover"`.
underlineNone | .og-link-underline-none | Styles applied when `underline="none"`.
