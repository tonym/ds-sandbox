import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '../SvgIcon/index';
import { Chip } from './Chip';

@NgModule({
  declarations: [Chip],
  exports: [Chip],
  imports: [CommonModule, SvgIconModule]
})
export class ChipModule {}
