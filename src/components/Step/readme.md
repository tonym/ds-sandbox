# Step
A step in a multi step flow

**Selector:**
og-step

**Use:**
`<og-step></og-step>`

## Style object
```javascript
import StepStyle from '@opensesame/gemini/components/Step';
```

## Module
```javascript
import { StepModule } from '@opensesame/gemini';
```

## Types
```javascript
import { StepProps } from '@opensesame/gemini';
import { StepClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { StepStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
completed | boolean &#124; string | false | Is the step completed?
disabled | boolean &#124; string | false | If `true`, the step will be disabled.
expanded | boolean &#124; string | false | If `true`, the step will be expanded.
fullWidth | boolean &#124; string | false | If `true`, the step will be full width of the container.
selected | boolean &#124; string | false | Is this the active step?

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-step-root | Styles applied to the root element.
alternativeLabel | .og-step-alternative-label | Styles applied if the parent stepper has `[alternativeLabel]="true"`.
completed | .og-step-completed | Pseudo class applied if the step is completed.
fullWidth | .og-step-full-width | Styles applied if `fullWidth` is `true`.
horizontal | .og-step-horizontal | Styles applied if stepper is horizontal.
vertical | .og-step-vertical | Styles applied if stepper is vertical.
