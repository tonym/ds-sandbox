export type TypographyObject = {
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  paragraphSpacing?: string | number;
  textCase?: string;
  textDecoration?: string;
};

type ShadowType = 'dropShadow' | 'innerShadow';

export type ShadowTokenSingleValue = {
  color: string;
  type: ShadowType;
  x: string | number;
  y: string | number;
  blur: string | number;
  spread: string | number;
  blendMode?: string;
};

export interface TokenProps {
  values: {
    [key: string]: SingleTokenObject[] | TokenObject;
  };
  updatedAt?: string;
  version?: string;
}

export type SingleToken = TokenGroup;

export type NewTokenObject = {
  name: string;
  value: string | TypographyObject | ShadowTokenSingleValue[] | ShadowTokenSingleValue | number;
  type: TokenType | string | 'undefined';
  description?: string;
};

type SingleTokenObjectCommonProperties = {
  name: string;
  description?: string;
};

export type SingleTokenObject =
  | (SingleTokenObjectCommonProperties & {
      type: 'boxShadow';
      value: ShadowTokenSingleValue[] | ShadowTokenSingleValue;
    })
  | (SingleTokenObjectCommonProperties & {
      type: 'typography';
      value: TypographyObject;
    })
  | (SingleTokenObjectCommonProperties & {
      type: TokenType;
      value: string | number;
    });

export interface SingleTokenTypeObject {
  type: TokenType;
  value: string | number;
}

export interface TokenGroup {
  [key: string]: SingleToken;
}

export type TokenArrayGroup = SingleTokenObject[];

export interface TokenBase {
  [key: string]: TokenTypeObject;
}

export interface Tokens {
  [key: string]: TokenBase | SingleTokenTypeObject;
}

export interface TokenTypeObject {
  description?: string;
  type: TokenType;
  value: string | number | boolean | TypographyObject | ShadowTokenSingleValue;
}

export interface TokenObject {
  values: TokenArrayGroup;
  type: 'array' | 'object';
}

export type TokenType =
  | 'color'
  | 'implicit'
  | 'borderRadius'
  | 'sizing'
  | 'spacing'
  | 'text'
  | 'typography'
  | 'opacity'
  | 'borderWidth'
  | 'boxShadow'
  | 'fontFamilies'
  | 'fontWeights'
  | 'lineHeights'
  | 'fontSizes'
  | 'letterSpacing'
  | 'paragraphSpacing'
  | 'textDecoration'
  | 'textCase';

export interface SelectionGroup {
  category: TokenType;
  type: SelectionValue;
  value: string;
  nodes: string[];
}

export interface SelectionValue {
  values?: string;
  sizing?: string;
  height?: string;
  width?: string;
  spacing?: string;
  verticalPadding?: string;
  horizontalPadding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  itemSpacing?: string;
  fill?: string;
  border?: string;
  borderRadius?: string;
  borderRadiusTopLeft?: string;
  borderRadiusTopRight?: string;
  borderRadiusBottomRight?: string;
  borderRadiusBottomLeft?: string;
  borderWidth?: string;
  boxShadow?: string;
  opacity?: string;
  fontFamilies?: string;
  fontWeights?: string;
  fontSizes?: string;
  lineHeights?: string;
  typography?: string;
  letterSpacing?: string;
  paragraphSpacing?: string;
  tokenValue?: string;
  value?: string;
  tokenName?: string;
  description?: string;
}

export type PullStyleTypes = {
  textStyles?: boolean;
  colorStyles?: boolean;
  effectStyles?: boolean;
};
