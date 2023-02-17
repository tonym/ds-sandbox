import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { Styles, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, getClassKey } from '../../helpers/index';
import WithStyles from '../../styles/withStyles/index';
import { Ground, GroundProps } from '../Ground/index';
import { ElementRef } from '@angular/core';

export interface PortalProps extends GroundProps {}

export const PortalClassKey = getClassKey('portal');

export type PortalClasses = 'root';

export function PortalStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {}
    },
    'Portal'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: PortalClassKey
};

@Component({
  selector: PortalClassKey,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template cdk-portal>
      <ng-content></ng-content>
    </ng-template>

    <div [class]="composedClasses" #portalOutlet></div>
  `
})
@WithStyles(PortalStyles, options)
export class Portal extends Ground implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(CdkPortal) portal;
  @ViewChild('portalOutlet') portalOutlet: ElementRef;

  public portalHost: DomPortalOutlet;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {
    super();
  }

  ngOnInit(): void {
    this.composeClasses();
  }

  ngAfterViewInit(): void {
    const portalOutletNativeElement = this.portalOutlet.nativeElement;

    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalOutlet(portalOutletNativeElement, this.componentFactoryResolver, this.appRef, this.injector);

    // Attach portal to host
    this.portalHost.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }

  composeClasses(): void {
    this.composedClasses = `${this.classes.root} ${this.className}`.trim();
  }
}
