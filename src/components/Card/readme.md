# Card
Cards contain content and actions about a single subject.

**Selector:**
og-card

**Use:**
`<og-card></og-card>`

## Style object
```javascript
import CardStyle from '@opensesame/gemini/components/Card';
```

## Module
```javascript
import { CardModule } from '@opensesame/gemini';
```

## Types
```javascript
import { CardProps } from '@opensesame/gemini';
import { CardClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { CardStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
radius | 'xs' &#124; 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' | 'sm' | The border radius for rounded corners.
raised | boolean | false | If `true`, the card will use raised styling.
variant | 'elevated' &#124; 'outlined' | 'outlined' | The card variant.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-card-root | Styles applied to the root element.

## Inheritance

The props of the Paper component are also available.
