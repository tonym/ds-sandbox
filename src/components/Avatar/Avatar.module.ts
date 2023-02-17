import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from '../Image/index';
import { Avatar } from './Avatar';

@NgModule({
  declarations: [Avatar],
  exports: [Avatar],
  imports: [CommonModule, ImageModule]
})
export class AvatarModule {}
