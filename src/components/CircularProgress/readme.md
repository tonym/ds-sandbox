# CircularProgress
Progress indicator

**Selector:**
og-circular-progress

**Use:**
`<og-circular-progress></og-circular-progress>`

## Style object
```javascript
import CircularProgressStyle from '@opensesame/gemini/components/CircularProgress';
```

## Module
```javascript
import { CircularProgressModule } from '@opensesame/gemini';
```

## Types
```javascript
import { CircularProgressProps } from '@opensesame/gemini';
import { CircularProgressClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { CircularProgressStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'inherit' &#124; 'primary' &#124; 'secondary' | 'primary' | The color of the indicator.
disableShrink | boolean &#124; string | `false` | if `true` and variant is `indeterminate`, the indicator will not shrink during animation.
size | number &#124; string | 40 | The width and height of the animation element.
thickness | number &#124; string | 3.6 | The thickness of the indicator.
value | number &#124; string | 0 | How much of the indicator to display when the variant is determinate or static.
variant | 'determinate' &#124; 'indeterminate' | 'indeterminate' | Indeterminate will animate, determinate and static will not.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-circular-progress-root | Styles applied to the root element.
circle | .og-circular-progress-circle | Style applied to the SVG circle.
circleDeterminate | .og-circular-progress-circle-determinate | Style applied to the SVG circle when variant is 'determinate'.
circleDisableShrink | .og-circular-progress-circle-disable-shrink | Style applied to the SVG circle when variant is 'determinate' and `disableShrink` is `true`.
circleIndeterminate | .og-circular-progress-circle-determinate | Style applied to the SVG circle when variant is `indeterminate`.
colorInherit | .og-circular-progress-color-inherit |
colorPrimary | .og-circular-progress-color-primary |
colorSecondary | .og-circular-progress-color-secondary |
determinate | .og-circular-progress-determinate | Style applied when variant is `determinate`.
indeterminate | .og-circular-progress-indeterminate | Style applied when variant is `indeterminate`.
static | .og-circular-progress-static | Style applied when variant is `static`.
svg | .og-circular-progress-svg | Style applied to the SVG element.
