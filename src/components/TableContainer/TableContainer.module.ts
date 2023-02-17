import { NgModule } from '@angular/core';
import { PaperModule } from '../Paper/index';
import { TableContainer } from './TableContainer';

@NgModule({
  declarations: [TableContainer],
  exports: [TableContainer],
  imports: [PaperModule]
})
export class TableContainerModule {}
