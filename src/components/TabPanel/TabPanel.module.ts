import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanel } from './TabPanel';

@NgModule({
  declarations: [TabPanel],
  exports: [TabPanel],
  imports: [CommonModule]
})
export class TabPanelModule {}
