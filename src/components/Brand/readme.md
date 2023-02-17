# Brand
Component for brand logo

**Material documentation:**

**Selector:**
og-brand

**Use:**
`<og-brand></og-brand>`

## Style object
```javascript
import BrandStyle from '@opensesame/gemini/components/Brand';
```

## Module
```javascript
import { BrandModule } from '@opensesame/gemini';
```

## Types
```javascript
import { BrandProps } from '@opensesame/gemini';
import { BrandClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { BrandStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alt | string | 'brand logo' | Image `alt` attribute
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
display | 'block' &#124; 'inherit' &#124; 'initial' &#124; 'inlineBlock' | 'initial' | The CSS display property identifier
fixed | boolean &#124; string | `false` | if `true`, image will not respond to changes in viewport width.
size | 'lg' &#124; 'md' &#124; 'sm' | 'md' |
src | string | | The image `src`
variant | string | | The image optimization variant to apply.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-brand-root | Styles applied to the root element.
displayBlock | .og-brand-display-block |
displayInherit | .og-brand-display-inherit |
displayInlineBlock | .og-brand-display-inline-block |
fixedLg | .og-brand-fixed-lg | Styles applied when `size` is `lg` and `fixed` is `true`.
fixedMd | .og-brand-fixed-md | Styles applied when `size` is `md` and `fixed` is `true`.
fixedsm | .og-brand-fixed-sm | Styles applied when `size` is `sm` and `fixed` is `true`.
lg | .og-brand-lg | Styles applied when `size` is `lg` and `fixed` is `false`.
md | .og-brand-md | Styles applied when `size` is `md` and `fixed` is `false`.
sm | .og-brand-sm | Styles applied when `size` is `sm` and `fixed` is `false`.
