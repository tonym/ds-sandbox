import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeader } from './CardHeader';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [CardHeader],
  exports: [CardHeader],
  imports: [CommonModule, TypographyModule]
})
export class CardHeaderModule {}
