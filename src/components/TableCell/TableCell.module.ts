import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableService } from '../Table/index';
import { TableCell } from './TableCell';

@NgModule({
  declarations: [TableCell],
  exports: [TableCell],
  imports: [CommonModule],
  providers: [TableService]
})
export class TableCellModule {}
