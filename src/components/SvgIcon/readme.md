# SvgIcon

**Available Material icons are listed at**
[https://fonts.google.com/icons](https://fonts.google.com/icons)

**Selector:**
og-svg-icon

**Use:**
`<og-svg-icon></og-svg-icon>`

## Style object
```javascript
import SvgIconStyle from '@opensesame/gemini/components/SvgIcon';
```

## Module
```javascript
import { SvgIconModule } from '@opensesame/gemini';
```

## Types
```javascript
import { SvgIconProps } from '@opensesame/gemini';
import { SvgIconClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { SvgIconStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'error' &#124; 'info' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'warning' | 'primary' |
fontSize | 'inherit' &#124; 'lg' &#124; 'md' &#124; 'sm' | 'md' |
icon | string | | The name of the Material icon, or a URL to an icon of your choice. Note that when using your own URL, the `iconStyle` property is ignored.
iconStyle | 'filled' &#124; 'outlined' &#124; 'rounded' &#124; 'sharp' &#124; 'twotone' | 'filled' |
shapeRendering | 'auto' &#124; 'optimizeSpeed' &#124; 'crispEdges' &#124; 'geometricPrecision' | | Passed to the `shape-rendering` attribute of the `svg` element. Undefined by default. If you find the icon rendering poorly or slowly, try experimenting with these settings.
svgTitle | string | | If provided, a `title` element will be added to the SVG. This is highly recommended for accessibility.
viewBox | string | `0 0 24 24` |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-svg-icon-root | Styles applied to the root element.
colorError | .og-svg-icon-color-error |
colorInfo | .og-svg-icon-color-info |
colorPrimary | .og-svg-icon-color-primary |
colorSecondary | .og-svg-icon-color-secondary |
colorSuccess | .og-svg-icon-color-success |
colorWarning | .og-svg-icon-color-warning |
fontSizeInherit | .og-svg-icon-font-size-inherit |
fontSizeLg | .og-svg-icon-font-size-lg |
fontSizeMd | .og-svg-icon-font-size-md |
fontSizeSm | .og-svg-icon-font-size-sm |
