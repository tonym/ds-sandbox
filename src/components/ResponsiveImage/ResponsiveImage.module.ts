import { NgModule } from '@angular/core';
import { ResponsiveImage } from './ResponsiveImage';
import { ImageModule } from '../Image/index';

@NgModule({
  declarations: [ResponsiveImage],
  exports: [ResponsiveImage],
  imports: [ImageModule]
})
export class ResponsiveImageModule {}
