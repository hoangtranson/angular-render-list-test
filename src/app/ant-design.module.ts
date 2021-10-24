import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [NzLayoutModule, NzMenuModule, NzListModule, NzTableModule],
  exports: [NzLayoutModule, NzMenuModule, NzListModule, NzTableModule],
})
export class AntDesignModule {}
