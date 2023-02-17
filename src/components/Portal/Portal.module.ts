import { NgModule } from '@angular/core';
import { Portal } from './Portal';
import { PortalModule as CDKPortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [Portal],
  exports: [Portal],
  imports: [CDKPortalModule]
})
export class PortalModule {}
