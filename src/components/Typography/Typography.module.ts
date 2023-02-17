import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent as Typography } from './Typography';

@NgModule({
  declarations: [Typography],
  exports: [Typography],
  imports: [CommonModule]
})
export class TypographyModule {}
