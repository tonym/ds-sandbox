import { NgModule } from '@angular/core';
import { Sash } from './Sash';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [Sash],
  exports: [Sash],
  imports: [TypographyModule]
})
export class SashModule {}
