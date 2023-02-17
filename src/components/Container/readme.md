# Container
A wrapper to constrain or contain a view or collection of views.

**Selector:**
og-container

**Use:**
`<og-container></og-container>`

## Style object
```javascript
import ContainerStyle from '@opensesame/gemini/components/Container';
```

## Module
```javascript
import { ContainerModule } from '@opensesame/gemini';
```

## Types
```javascript
import { ContainerProps } from '@opensesame/gemini';
import { ContainerClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { ContainerStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
fixed | boolean | false | If `true` the width of the container will be fixed to each breakpoint.
maxWidth | string &#124; false | 'lg' | Accepts a breakpoint key, or `false` to disable.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-container-root | Styles applied to the root element.
fixed | .og-container-fixed | Styles applied if `[fixed]="true"`.
maxWidthXs | .og-container-max-width-xs | Styles applied if `maxWidth="xs"`.
maxWidthSm | .og-container-max-width-sm | Styles applied if `maxWidth="sm"`.
maxWidthMd | .og-container-max-width-md | Styles applied if `maxWidth="md"`.
maxWidthLg | .og-container-max-width-lg | Styles applied if `maxWidth="lg"`.
maxWidthXl | .og-container-max-width-xl | Styles applied if `maxWidth="xl"`.
