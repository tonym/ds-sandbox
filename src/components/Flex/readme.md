# Flex
Flexbox layout component.

**Selector:**
og-flex

**Use:**
`<og-flex></og-flex>`

## Style object
```javascript
import FlexStyle from '@opensesame/gemini/components/Flex';
```

## Module
```javascript
import { FlexModule } from '@opensesame/gemini';
```

## Types
```javascript
import { FlexProps } from '@opensesame/gemini';
import { FlexClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { FlexStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alignContent | CSSProperties['alignContent'] | 'stretch' |
alignItems | CSSProperties['alignItems'] | 'stretch' |
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
flexDirection | CSSProperties['flexDirection'] | 'row' |
flexWrap | CSSProperties['flexWrap'] | 'noWrap' |
gap | CSSProperties['gap'] | |
justifyContent | CSSProperties['justifyContent'] | 'flex-start' |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-flex-root | Styles applied to the root element.
alignContentCenter | .og-flex-align-content-center | Styles applied if `alignContent="center"`.
alignContentFlexEnd | .og-flex-align-content-flex-end | Styles applied if `alignContent="flexEnd"`.
alignContentFlexStart | .og-flex-align-content-flex-start | Styles applied if `alignContent="flexStart"`.
alignContentSpaceAround | .og-flex-align-content-space-around | Styles applied if `alignContent="spaceAround"`.
alignContentSpaceBetween | .og-flex-align-content-space-between | Styles applied if `alignContent="spaceBetween"`.
alignContentStretch | .og-flex-align-content-stretch | Styles applied if `alignContent="stretch"`.
alignItemsBaseline | .og-flex-align-items-baseline | Styles applied if `alignItems="baseline"`.
alignItemsCenter | .og-flex-align-items-center | Styles applied if `alignItems="center"`.
alignItemsFlexEnd | .og-flex-align-items-flex-end | Styles applied if `alignItems="flexEnd"`.
alignItemsFlexStart | .og-flex-align-items-flex-start | Styles applied if `alignItems="flexStart"`.
alignItemsStretch | .og-flex-align-items-stretch | Styles applied if `alignItems="stretch"`.
flexDirectionColumn | .og-flex-direction-column | Styles applied if `flexDirection="column"`.
flexDirectionColumnReverse | .og-flex-direction-column-reverse | Styles applied if `flexDirection="columnReverse"`.
flexDirectionRow | .og-flex-direction-row | Styles applied if `flexDirection="row"`.
flexDirectionRowReverse | .og-flex-direction-row-reverse | Styles applied if `flexDirection="rowReverse"`.
flexWrapNoWrap | .og-flex-wrap-no-wrap | Styles applied if `flexWrap="noWrap"`.
flexWrapWrap | .og-flex-wrap-wrap | Styles applied if `flexWrap="wrap"`.
flexWrapWrapReverse | .og-flex-wrap-wrap-reverse | Styles applied if `flexWrap="wrapReverse"`.
justifyContentCenter | .og-flex-justify-content-center | Styles applied if `justifyContent="center"`.
justifyContentFlexEnd | .og-flex-justify-content-flex-end | Styles applied if `justifyContent="flexEnd"`.
justifyContentFlexStart | .og-flex-justify-content-flex-start | Styles applied if `justifyContent="flexStart"`.
justifyContentSpaceAround | .og-flex-justify-content-space-around | Styles applied if `justifyContent="spaceAround"`.
justifyContentSpeceBetween | .og-flex-justify-content-space-between | Styles applied if `justifyContent="spaceBetween"`.
justifyContentSpaceEvenly | .og-flex-justify-content-space-evenly | Styles applied if `justifyContent="spaceEvenly"`.
