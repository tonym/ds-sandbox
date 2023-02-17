# FlexChild
Flexbox layout component.

**Selector:**
og-flex-child

**Use:**
`<og-flex-child></og-flex-child>`

## Style object
```javascript
import FlexChildStyle from '@opensesame/gemini/components/FlexChild';
```

## Module
```javascript
import { FlexChildModule } from '@opensesame/gemini';
```

## Types
```javascript
import { FlexChildProps } from '@opensesame/gemini';
import { FlexChildClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { FlexChildStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alignSelf | CSSProperties['alignSelf'] | 'auto' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
flex | CSSProperties['flex'] | '0 1 auto' |
flexBasis | CSSProperties['flexBasis'] | 'auto' |
flexGrow | CSSProperties['flexGrow'] | 0 |
flexShrink | CSSProperties['flexShrink'] | 0 |
order | CSSProperties['order'] | 0 |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-flex-child-root | Styles applied to the root element.
alignSelfAuto | .og-flex-child-align-self-auto | Styles applied to the root element if `alignSelf="auto"`.
alignSelfBaseline | .og-flex-child-align-self-baseline | Styles applied to the root element if `alignSelf="baseline"`.
alignSelfCenter | .og-flex-child-align-self-center | Styles applied to the root element if `alignSelf="center"`.
alignSelfFlexEnd | .og-flex-child-align-self-flex-end | Styles applied to the root element if `alignSelf="flexEnd"`.
alignSelfFlexStart | .og-flex-child-align-self-flex-start | Styles applied to the root element if `alignSelf="flexStart"`.
alignSelfStretch | .og-flex-child-align-self-stretch | Styles applied to the root element if `alignSelf="stretch"`.
`flex${encodeURIComponent(flex)}` | `.og-flex-child-flex-${encodeURIComponent(flex)}` | Styles applied when `flex="..."`.
`flexBasis${flexBasis}` | `.og-flex-child-flex-basis-${flexBasis}` | Styles applied when `flexBasis="..."`.
`flexGrow${flexGrow}` | `.og-flex-child-flex-grow-${flexGrow}` | Styles applied when `flexGrow="..."`.
`flexShrink${flexShrink` | `.og-flex-child-flex-shrink-${flexShrink}` | Styles applied when `flexShrink="..."`.
`order${order}` | `.og-order-${order}` | Styles applied when `order="..."`.
