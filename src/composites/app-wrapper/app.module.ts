import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppBarModule } from '../../components/AppBar/index';
import { AvatarModule } from '../../components/Avatar/index';
import { BrandModule } from '../../components/Brand/index';
import { ClickAwayListenerModule } from '../../components/ClickAwayListener/index';
import { BadgeModule } from '../../components/Badge/index';
import { DrawerModule } from '../../components/Drawer/index';
import { FlexChildModule } from '../../components/FlexChild/index';
import { FlexModule } from '../../components/Flex/index';
import { IconButtonModule } from '../../components/IconButton/index';
import { MenuItemModule } from '../../components/MenuItem/index';
import { MenuListItemModule } from '../../components/MenuListItem/index';
import { MenuListModule } from '../../components/MenuList/index';
import { MenuModule } from '../../components/Menu/index';
import { ScrimModule } from '../../components/Scrim/index';
import { SvgIconModule } from '../../components/SvgIcon/index';
import { TabModule } from '../../components/Tab/index';
import { TabsModule } from '../../components/Tabs/index';
import { TypographyModule } from '../../components/Typography/index';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [
    AppBarModule,
    AvatarModule,
    BadgeModule,
    BrandModule,
    BrowserModule,
    ClickAwayListenerModule,
    DrawerModule,
    FlexChildModule,
    FlexModule,
    HttpClientModule,
    IconButtonModule,
    MenuItemModule,
    MenuListItemModule,
    MenuListModule,
    MenuModule,
    ScrimModule,
    SvgIconModule,
    TabModule,
    TabsModule,
    TypographyModule
  ]
})
export class AppModule {}
