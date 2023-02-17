import pxToRem from '../../helpers/pxToRem/index';
import { fontWeights } from '../../store/index';
import useTheme from '../useTheme/index';
import useTokens from '../useTokens/index';
import { TypographyOptions, TypographyVariantStyle } from '../../types/index';

const ogDefault = useTokens();

const fontFamilies = '"Helvetica", Helvetica, Arial, sans-serif';

const composeVariant = (token: string): TypographyVariantStyle => {
  const variant = { ...ogDefault[token] };
  return {
    fontFamily: `"${variant.fontFamily}", ${fontFamilies}`,
    fontSize: pxToRem(variant.fontSize),
    fontWeight: fontWeights[variant.fontWeight.toLowerCase()],
    letterSpacing: variant.letterSpacing,
    lineHeight: variant.lineHeight,
    textTransform: variant.textCase
  };
};

export const composedTypography: TypographyOptions = {
  fontFamily: `"${ogDefault.P400.fontFamily}", ${fontFamilies}`,
  variants: {
    body1: { ...composeVariant('P400') },
    body2: { ...composeVariant('PSmall400') },
    button: { ...composeVariant('H4600Title') },
    caption: { ...composeVariant('H6400') },
    h1: { ...composeVariant('H1600') },
    h2: { ...composeVariant('H2600') },
    h3: { ...composeVariant('H3600') },
    h4: { ...composeVariant('H4400') },
    h5: { ...composeVariant('H5600') },
    h6: { ...composeVariant('H6600') },
    overline: { ...composeVariant('H4400Title') },
    subtitle1: { ...composeVariant('H5400') },
    subtitle2: { ...composeVariant('Helper400') }
  }
};

export default composedTypography;
