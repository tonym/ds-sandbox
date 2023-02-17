import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import provideClasses from '../../styles/provideClasses/index';
import useTheme from '../../styles/useTheme/index';
import { Ground, GroundProps } from '../Ground/index';

type CenteredProp = boolean | string;
type DisableEscapeKeyProp = boolean | string;
type DisableScrimClickProp = boolean | string;
type ElevationProp = number | string;
type OpenProp = boolean | string;
type RadiusProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SquareProp = boolean | string;
type WithScrimProp = boolean | string;

export interface ModalProps extends GroundProps {
  centered?: CenteredProp;
  disableEscapeKey?: DisableEscapeKeyProp;
  disableScrimClick?: DisableScrimClickProp;
  elevation?: ElevationProp;
  open?: OpenProp;
  radius?: RadiusProp;
  square?: SquareProp;
  withScrim?: WithScrimProp;
}

export const DialogClassKey = getClassKey('dialog');

export type DialogClasses = 'root' | 'centered';

export function DialogStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        padding: theme.spacing.unit * 3,
        position: 'absolute'
      },
      centered: {
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    'Dialog'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 3,
  meta: DialogClassKey
};

@Component({
  selector: DialogClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="open">
      <ng-template #content>
        <og-paper
          [className]="composedClasses"
          [elevation]="elevation"
          [radius]="radius"
          [square]="square"
          (click)="modalClick($event)"
          (window:keydown.esc)="escapeKeyDown($event)"
        >
          <ng-content></ng-content>
        </og-paper>
      </ng-template>

      <og-scrim *ngIf="withScrim; else elseBlock" (click)="scrimClick($event)" [open]="open">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </og-scrim>

      <ng-template #elseBlock>
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </ng-template>
    </ng-container>
  `
})
export class Dialog extends Ground implements OnChanges, OnInit {
  @Input() centered: CenteredProp = true;
  @Input() disableEscapeKey: DisableEscapeKeyProp = false;
  @Input() disableScrimClick: DisableScrimClickProp = false;
  @Input() elevation: ElevationProp = 24;
  @Input() open: OpenProp = false;
  @Input() radius: RadiusProp = 'md';
  @Input() square: SquareProp = false;
  @Input() withScrim: WithScrimProp = true;

  @Output() dialogScrimClick = new EventEmitter<MouseEvent>();
  @Output() dialogEscapeKeyDown = new EventEmitter<KeyboardEvent>();

  constructor() {
    super();
    this.classes = provideClasses(DialogStyles, options);
  }

  ngOnInit(): void {
    this.prepareComponent();
  }

  ngOnChanges(): void {
    this.prepareComponent();
  }

  prepareComponent(): void {
    this.withScrim = this.withScrim && this.withScrim !== 'false';
    this.composeClasses();
  }

  composeClasses(): void {
    this.composedClasses = '';
    const centeredClass = this.centered && this.centered !== 'false' ? this.classes.centered : '';
    const composedClasses = `${this.classes.root} ${centeredClass} ${this.className}`.trim();
    this.composedClasses = replaceMultipleSpaces(composedClasses);
  }

  scrimClick(e: MouseEvent): void {
    if (!this.disableScrimClick || this.disableScrimClick === 'false') {
      this.dialogScrimClick.emit(e);
    }
  }

  modalClick(e: MouseEvent): void {
    e.stopPropagation();
  }

  escapeKeyDown(e: KeyboardEvent): void {
    if (!this.disableEscapeKey || this.disableEscapeKey === 'false') {
      this.dialogEscapeKeyDown.emit(e);
    }
  }
}

const theme = useTheme();
const DialogStyle = DialogStyles(theme);

export default DialogStyle;
