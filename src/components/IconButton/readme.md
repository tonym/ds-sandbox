# IconButton

**Selector:**
og-icon-button

**Use:**
`<og-icon-button></og-icon-button>`

## Style object
```javascript
import IconButtonStyle from '@opensesame/gemini/components/IconButton';
```

## Module
```javascript
import { IconButtonModule } from '@opensesame/gemini';
```

## Types
```javascript
import { IconButtonProps } from '@opensesame/gemini';
import { IconButtonClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { IconButtonStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
buttonType | 'button' &#124; 'reset' &#124; 'submit' | 'button' |
color | 'error' &#124; 'info' &#124; 'inherit' &#124; 'primary' &#124; 'secondary' &#124; 'success' &#124; 'warning' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
disabled | boolean &#124; string | false |
edge | 'end' &#124; 'start' &#124; undefined | undefined | Used to apply negative margin if aligning to either right or left edge of container.
hasParent | boolean &#124; string | false | If true, will render the button as a `span`
hover | 'background' &#124; 'foreground' &#124; 'icon' | 'background' | Whether to apply color and hover to background, foreground, or the icon itself
icon | string | | The material icon to display
iconStyle | 'filled' &#124; 'outlined' &#124; 'rounded' &#124; 'sharp' &#124; 'twotone' | 'filled' |
link | string | |
newTab | boolean &#124; string | false | If true, and if this is a link, the link will open in a new tab.
shapeRendering | 'auto' &#124; 'optimizeSpeed' &#124; 'crispEdges' &#124; 'geometricPrecision' | | Passed to the shape-rendering attribute of the svg element. Undefined by default. If you find the icon rendering poorly or slowly, try experimenting with these settings.
size | 'md' &#124; 'sm' | |
svgTitle | string | |
title | string | | Passed to the button `title` attribute.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-icon-button-root | Styles applied to the root element.
colorBackgroundError | .og-icon-button-color-background-error |
colorBackgroundInfo | .og-icon-button-color-background-info |
colorBackgroundInherit | .og-icon-button-color-background-inherit |
colorBackgroundPrimary | .og-icon-button-color-background-primary |
colorBackgroundSecondary | .og-icon-button-color-background-secondary |
colorBackgroundSuccess | .og-icon-button-color-background-success |
colorBackgroundWarning | .og-icon-button-color-background-warning |
colorForegroundError | .og-icon-button-color-foreground-error |
colorForegroundInfo | .og-icon-button-color-foreground-info |
colorForegroundInherit | .og-icon-button-color-foreground-inherit |
colorForegroundPrimary | .og-icon-button-color-foreground-primary |
colorForegroundSecondary | .og-icon-button-color-foreground-secondary |
colorForegroundSuccess | .og-icon-button-color-foreground-success |
colorForegroundWarning | .og-icon-button-color-foreground-warning |
colorIconError | .og-icon-button-color-icon-error |
colorIconInfo | .og-icon-button-color-icon-info |
colorIconInherit | .og-icon-button-color-icon-inherit |
colorIconPrimary | .og-icon-button-color-icon-primary |
colorIconSecondary | .og-icon-button-color-icon-secondary |
colorIconSuccess | .og-icon-button-color-icon-success |
colorIconWarning | .og-icon-button-color-icon-warning |
disabled | .og-icon-button-disabled |
edgeEnd | .og-icon-button-edge-end |
edgeStart | .og-icon-button-edge-start |
enabledBackground | .og-icon-button-enabled-background |
enabledForeground | .og-icon-button-enabled-foreground |
sizeMd | .og-icon-button-size-md |
sizeSm | .og-icon-button-size-sm |
