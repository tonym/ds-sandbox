import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { Hidden } from './Hidden';

@NgModule({
  declarations: [Hidden],
  exports: [Hidden],
  imports: [CommonModule, LayoutModule]
})
export class HiddenModule {}
