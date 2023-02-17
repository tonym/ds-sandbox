import { NgModule } from '@angular/core';
import { Table } from './Table';
import { TableService } from './Table.service';

@NgModule({
  declarations: [Table],
  exports: [Table],
  imports: [],
  providers: [TableService]
})
export class TableModule {}
