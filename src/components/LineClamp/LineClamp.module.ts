import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineClamp } from './LineClamp';
import { ButtonModule } from '../Button/index';
import { LinkModule } from '../Link/index';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [LineClamp],
  exports: [LineClamp],
  imports: [ButtonModule, CommonModule, LinkModule, TypographyModule]
})
export class LineClampModule {}
