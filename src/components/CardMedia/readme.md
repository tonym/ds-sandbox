# CardMedia
Adds media to a card

**Selector:**
og-card-media

**Use:**
`<og-card-media></og-card-media>`

## Style object
```javascript
import CardMediaStyle from '@opensesame/gemini/components/CardMedia';
```

## Module
```javascript
import { CardMediaModule } from '@opensesame/gemini';
```

## Types
```javascript
import { CardMediaProps } from '@opensesame/gemini';
import { CardMediaClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { CardMediaStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alt | string | 'card image' | Alt attribute text for use with elements that accept alt tags.
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
element | 'audio' &#124; 'div' &#124; 'img' &#124; 'picture' &#124; 'video' | 'div' | The media element to use.
media | string &#124; string[] | | Value(s) for the media attribute when an element that accepts a media tag is used. For multiple values, they are used in array order.
poster | string | | For video elements, a path to the media poster.
src | string &#124; string[] | | Img src. Multiple sources are used in array order.
type | string &#124; string[] | | Value(s) for the type attribute when an element that accepts a type tag is used. For multiple values, they are used in array order.

**How `media` and `type` work together:**
If you have values for both media and type, and they are both arrays, the system will use the values at the same array index when generating the child elements for `picture` and `video` elements. If either is an array, and the other a string, the string value will be used for all elements generated from the array.

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-card-media-root | Styles applied to the root element.
media | .og-card-media-media | Styles applied when `element` is a media element (audio, img, picture, video).
img | .og-card-media-img | Styles applied when `element` is an image element (img, or picture);
