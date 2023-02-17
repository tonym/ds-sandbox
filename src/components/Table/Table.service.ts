import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TableProps } from './Table';

@Injectable()
export class TableService {
  private tablePropsSource = new Subject<TableProps>();

  tableProps = this.tablePropsSource.asObservable();

  announceTableProps(tableProps: TableProps) {
    this.tablePropsSource.next(tableProps);
  }
}
