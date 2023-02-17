import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '../SvgIcon/index';
import { TableSortLabel } from './TableSortLabel';

@NgModule({
  declarations: [TableSortLabel],
  exports: [TableSortLabel],
  imports: [CommonModule, SvgIconModule]
})
export class TableSortLabelModule {}
