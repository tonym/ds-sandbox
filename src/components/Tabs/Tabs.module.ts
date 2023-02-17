import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexChildModule } from '../FlexChild/index';
import { Tabs } from './Tabs';

@NgModule({
  declarations: [Tabs],
  exports: [Tabs],
  imports: [CommonModule, FlexChildModule]
})
export class TabsModule {}
