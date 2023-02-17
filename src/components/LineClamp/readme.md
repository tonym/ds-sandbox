# LineClamp
Limits the amount of content shown, and provides expand/collapse control to show/hide hidden content.

**Selector:**
og-line-clamp

**Use:**
`<og-line-clamp></og-line-clamp>`

## Style object
```javascript
import LineClampStyle from '@opensesame/gemini/components/LineClamp';
```

## Module
```javascript
import { LineClampModule } from '@opensesame/gemini';
```

## Types
```javascript
import { LineClampProps } from '@opensesame/gemini';
import { LineClampClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { LineClampStyles } from  '@opensesame/gemini';
```

## Constants
```javascript
import { LineClampDefaultTypographyProps } from '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
content | string | | LineClamp works like any other component for child content, you place the content in between opening and closing tags. But, if your content has markup or layout you want to preserve, add it using the `content` prop. NOTE: This is not recommended! If you use `content`, which uses `innerHTML` internally, please be certain you understand what you are doing.
contentTypographyVariant | string | 'inherit' | The typography variant to use for the content.
controlButtonClassName | string | | Class name to apply to the button of the clamp control if control is a button type.
controlButtonProps | LineClampButtonProps | Props passed to the button component if control is a button type.
controlLabelLess | string | 'Less' | The label on the clamp control when all the content is shown.
controlLabelMore | string | 'More' | The label on the clamp control when some of the content is hidden.
controlType | 'button' &#124; 'typography' | 'typography' | Should the control use a Button component or a Typography component?
controlTypographyClassName | string | | Class name to apply to the typography of the clamp control if control is a typography type.
controlTypographyProps | TypographyProps | LineClampDefaultTypographyProps | Props passed to the typography component of the clamp control if control is a typography type.
forceClamp | boolean &#124; string | `false` | If `true` clamp is always used.
height | string &#124; number | 136 | The height of the clamp
overlay | boolean &#124; string | `true` | If `true`, will add a gradient overlay when clamped
whiteSpace | 'breakSpaces' &#124; 'normal' &#124; 'nowrap' &#124; 'pre' &#124; 'preLine' &#124; 'preWrap' | 'normal' | CSS white-space prop

## Events
Name | Props | Description
---- | ----- | -----------
lineClampClick | `{ component: string, clamped: boolean, event: Event }` | Event emitted when LineClamp control is clicked

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-line-clamp-root | Styles applied to the root element.
clamped | .og-line-clamp-clamped | Styles applied when clamped.
overlay | .og-line-clamp-overlay |
whiteSpaceBreakSpaces | .og-line-clamp-white-space-break-spaces |
whiteSpaceNormal | .og-line-clamp-white-space-normal |
whiteSpaceNoWrap | .og-line-clamp-white-space-no-wrap |
whiteSpacePre | .og-line-clamp-white-space-pre |
whiteSpacePreLine | .og-line-clamp-white-space-pre-line |
whiteSpacePreWrap | .og-line-clamp-white-space-pre-wrap |

## Control classes
Class | Control
----- | -------
.og-line-clamp-button | LineClamp button control
.og-line-clamp-link | LineClamp link control
