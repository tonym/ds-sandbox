# LinearProgress
Progress bar

**Selector:**
og-linear-progress

**Use:**
`<og-linear-progress></og-linear-progress>`

## Style object
```javascript
import LinearProgressStyle from '@opensesame/gemini/components/LinearProgress';
```

## Module
```javascript
import { LinearProgressModule } from '@opensesame/gemini';
```

## Types
```javascript
import { LinearProgressProps } from '@opensesame/gemini';
import { LinearProgressClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { LinearProgressStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
color | 'error' &#124; 'info' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'warning' | 'primary' |
height | 'full' &#124; 'lg' &#124; 'md' &#124; 'sm' | 'sm' | If height is `full`, then the containing element must have a height.
value | number &#124; string | | The value of progress between 0 and 100.
valueBuffer | number &#124; string | | The value of buffer progress between 0 and 100.
variant | 'buffer' &#124; 'determinate' &#124; 'indeterminate' | 'indeterminate' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-linear-progress-root | Styles applied to the root element.
bar | .og-linear-progress-bar |
bar1Buffer | .og-linear-progress-bar1-buffer |
bar1Determinate | .og-linear-progress-bar1-determinate |
bar2Buffer | .og-linear-progress-bar2-buffer |
bar2Indeterminate | .og-linear-progress-bar2-indeterminate |
barColorError | .og-linear-progress-bar-color-error |
barColorInfo | .og-linear-progress-bar-color-info |
barColorPrimary | .og-linear-progress-bar-color-primary |
barColorSecondary | .og-linear-progress-bar-color-secondary |
barColorSuccess | .og-linear-progress-bar-color-success |
barColorWarning | .og-linear-progress-bar-color-warning |
buffer | .og-linear-progress-buffer |
colorError | .og-linear-progress-color-error |
colorInfo | .og-linear-progress-color-info |
colorPrimary | .og-linear-progress-color-primary |
colorSecondary | .og-linear-progress-color-secondary |
colorSuccess | .og-linear-progress-color-success |
colorWarning | .og-linear-progress-color-warning |
dashed | .og-linear-progress-dashed |
dashedColorError | .og-linear-progress-dashed-color-error |
dashedColorInfo | .og-linear-progress-dashed-color-info |
dashedColorPrimary | .og-linear-progress-dashed-color-primary |
dashedColorSecondary | .og-linear-progress-dashed-color-secondary |
dashedColorSuccess | .og-linear-progress-dashed-color-success |
dashedColorWarning | .og-linear-progress-dashed-color-warning |
heightFull | .og-linear-progress-height-full |
heightLg | .og-linear-progress-height-lg |
heightMd | .og-linear-progress-height-md |
heightSm | .og-linear-progress-height-sm |
