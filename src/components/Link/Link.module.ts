import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from './Link';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [Link],
  exports: [Link],
  imports: [CommonModule, TypographyModule]
})
export class LinkModule {}
