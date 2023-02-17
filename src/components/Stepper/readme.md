# Stepper
Controls and displays steps in a multi-step user flow.

**Selector:**
og-stepper

**Use:**
`<og-stepper></og-stepper>`

## Style object
```javascript
import StepperStyle from '@opensesame/gemini/components/Stepper';
```

## Module
```javascript
import { StepperModule } from '@opensesame/gemini';
```

## Types
```javascript
import { StepperProps } from '@opensesame/gemini';
import { StepperClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { StepperStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alternativeLabel | boolean &#124; string | false | If `true`, the label will be under the step icon instead of next to it.
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
nonLinear | boolean &#124; string | false | Indicates if the step flow is non-linear.
orientation | 'horizontal' &#124; 'vertical' | 'horizontal' |
selectedStep | number &#124; string | 0 | The selected step.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-stepper-root | Styles applied to the root element.
alternativeLabel | .og-stepper-alternative-label | Styles applied if `[alternativeLabel]="true"`.
horizontal | .og-stepper-horizontal | Styles applied if `orientation="horizontal"`.
vertical | .og-stepper-vertical | Styles applied if `orientation="vertical"`.
