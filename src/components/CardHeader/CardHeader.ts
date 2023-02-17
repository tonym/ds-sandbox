import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { applyOverrides, getClassKey } from '../../helpers/index';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';
import { TypographyProps } from '../Typography/index';

type DisableTypographyProp = boolean | string;
type SubheadingProp = string;
type TitleProp = string;

export interface CardHeaderProps extends GroundProps {
  disableTypography?: DisableTypographyProp;
  subheading?: SubheadingProp;
  subheadingTypographyProps?: TypographyProps;
  title?: TitleProp;
  titleTypographyProps?: TypographyProps;
}

export const cardHeaderClassKey = getClassKey('card-header');

export type CardHeaderClasses = 'root' | 'subheading' | 'title';

export function CardHeaderStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        alignItems: 'center',
        padding: theme.spacing.unit * 2,
        width: '100%'
      },
      subheading: {},
      title: {}
    },
    'CardHeader'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: cardHeaderClassKey
};

@Component({
  selector: cardHeaderClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="{{ classes.root }} {{ className }}">
      <ng-template *ngIf="disableTypography; else elseBlock">
        <ng-content></ng-content>
      </ng-template>
      <ng-template #elseBlock>
        <og-typography
          align="{{ titleTypography.align }}"
          className="{{ classes.title }}"
          color="{{ titleTypography.color }}"
          display="{{ titleTypography.display }}"
          gutterBottom="{{ titleTypography.gutterBottom }}"
          noWrap="{{ titleTypography.noWrap }}"
          paragraph="{{ titleTypography.paragraph }}"
          variant="{{ titleTypography.variant }}"
          >{{ title }}</og-typography
        >
        <og-typography
          align="{{ subheadingTypography.align }}"
          color="{{ subheadingTypography.color }}"
          className="{{ classes.subheading }}"
          display="{{ subheadingTypography.display }}"
          gutterBottom="{{ subheadingTypography.gutterBottom }}"
          noWrap="{{ subheadingTypography.noWrap }}"
          paragraph="{{ subheadingTypography.paragraph }}"
          variant="{{ subheadingTypography.variant }}"
          >{{ subheading }}</og-typography
        >
      </ng-template>
    </div>
  `
})
export class CardHeader extends Ground implements OnChanges, OnInit {
  @Input() disableTypography: DisableTypographyProp = false;
  @Input() subheading: SubheadingProp = '';
  @Input() subheadingTypographyProps: TypographyProps = {};
  @Input() title: TitleProp = '';
  @Input() titleTypographyProps: TypographyProps = {};

  public composedClasses = '';

  public subheadingTypography: TypographyProps = {
    align: 'inherit',
    color: 'textSecondary',
    display: 'block',
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
    variant: 'caption'
  };
  public titleTypography: TypographyProps = {
    align: 'inherit',
    color: 'textPrimary',
    display: 'block',
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
    variant: 'body1'
  };

  constructor() {
    super();
    this.classes = provideClasses(CardHeaderStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.composeTypographyProps();
  }

  composeTypographyProps(): void {
    this.subheadingTypography = { ...this.subheadingTypography, ...this.subheadingTypographyProps };
    this.titleTypography = { ...this.titleTypography, ...this.titleTypographyProps };
  }
}

const theme = useTheme();
const CardHeaderStyle = CardHeaderStyles(theme);

export default CardHeaderStyle;
