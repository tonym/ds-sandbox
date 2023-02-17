import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperModule } from '../Paper/index';
import { ScrimModule } from '../Scrim/index';
import { Dialog } from './Dialog';

@NgModule({
  declarations: [Dialog],
  exports: [Dialog],
  imports: [CommonModule, PaperModule, ScrimModule]
})
export class DialogModule {}
