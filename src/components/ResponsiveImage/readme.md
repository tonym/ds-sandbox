# ResponsiveImage
An IMG or PICTURE element with srcset/sizes or sources

**Fastly Image Optimizer API documentation**
[https://docs.fastly.com/en/guides/image-optimization-api](https://docs.fastly.com/en/guides/image-optimization-api)

**Selector:**
og-responsive-image

**Use:**
`<og-responsive-image></og-responsive-image>`

## Style object
```javascript
import ResponsiveImageStyle from '@opensesame/gemini/components/ResponsiveImage';
```

## Module
```javascript
import { ResponsiveImageModule } from '@opensesame/gemini';
```

## Types
```javascript
import { ResponsiveImageProps } from '@opensesame/gemini';
import { ResponsiveImageClasses } from '@opensesame/gemini';
```

## Styles creator
```javascript
import { ResponsiveImageStyles } from  '@opensesame/gemini';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alt | string | 'catalog image' | Alt attribute text for use with elements that accept alt tags.
bgColor | string | | The background color when adding pixels, or replacing transparent pixels.
blur | string &#124; number | | Adjust the blur of the image using Gaussian blur.
brightness | string &#124; number | | Adjust the brightness of the image.
canvas | string | | Change the size of the image canvas.
classes | object | | Override the styles applied to the component.
className | string &#124; string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
contrast | string &#124; number | | Adjust the contrast of the image.
crop | string | | Crop criteria
disable | 'upscale' | | Disable upscaling. If used, `width`, `height`, or `dpr` must also be provided. Only counts if upscale is enabled by default in Fastly Image Optimizer default settings.
dpr | string &#124; number | | Device pixel ratio
element | 'img' &#124; 'picture' | 'img' | The media element to use.
enable | 'upscale' | | Enable upscaling if the image is smaller than the requested dimensions. If used, `width`, `height`, or `dpr` must also be provided. Only counts if upscale is disabled by default in Fastly Image Optimizer default settings.
fit | 'bounds' &#124; 'cover' &#124; 'crop' | | The `object-fit` equivalent.
format | 'bjpg' &#124; 'gif' &#124; 'jpg' &#124; 'pjpg' &#124; 'png' &#124; 'png8' &#124; 'png24' &#124; 'png32' &#124; 'webp' &#124; 'webpll' &#124; 'webply' | | The image format.
height | string &#124; number | | Optimized image height. Submit the value only (100, not 100px). For percentages, use a float between 0.1 and 0.99
intrinsicValues | boolean &#124; string | `false` | If `true` and if `element` is `img`, element will have width and height attributes.
optimize | 'low' &#124; 'medium' &#124; 'high' | | Auto optimize a compressed image format. Ignored if `quality` is also provided.
orient | string &#124; number | | The image orientation.
pad | string &#124; number | | Add some pixels to a side or sides by either pixel value or percentage.  For percentages, use a float between 0.1 and 0.99
quality | string &#124; number | | The level of compression for lossy image formats.
resizeFilter | 'bilinear' &#124; 'bicubic' &#124; 'cubic' &#124; 'lanczos' &#124; 'lanczos2' &#124; 'lanczos3' &#124; 'linear' &#124; 'nearest' | | The filter to use when resizing an image.
saturation | string &#124; number | | Adjust the saturation of the image.
sharpen | string | | Adjust the sharpening of the image using unsharp mask. Accepts a string of values with alpha identifiers, amount `a`, radius `r` and threshold `t`. Example: `a5,r2,t0`.
sources | ImageSourceProp | | Array of objects with values for `img` srcset/sizes or `picture` source elements.
src | string | | The image `src`
trim | string &#124; number | | Trim some pixels from a side or sides by either pixel value or percentage.  For percentages, use a float between 0.1 and 0.99
variant | string | | The optimization scheme variant
width | string &#124; number | | Optimized image width. Submit the value only (100, not 100px). For percentages, use a float between 0.1 and 0.99

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .og-responsive-image-root | Styles applied to the root element.
