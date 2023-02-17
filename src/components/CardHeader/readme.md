# CardHeader
Card header is the top, title bar of a card.

**Selector:**
og-card-header

**Use:**
`<og-card-header></og-card-header>`

## Style object
```javascript
import CardHeaderStyle from '@opensesame/gemini/components/CardHeader';
```

## Module
```javascript
import { CardHeaderModule } from '@opensesame/gemini';
```

## Types
```javascript
import { CardHeaderProps } from '@opensesame/gemini';
import { CardHeaderClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { CardHeaderStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
disableTypography | boolean | false | If `true`, header content does not use internal typography styling.
subheading | string | | The subheading content.
subheadingTypography | object | {} | Typography props passed to the subheading typography component.
title | string | | The title content.
titleTypography | object | {} | Typography props passed to the title typography component.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-card-header-root | Styles applied to the root element.
title | .og-card-header-title | Styles applied to the title.
subheading | .og-card-header-subheading | Styles applied to the subheading.
