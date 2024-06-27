import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';
import { NotificationComponent } from './components/notification/notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [
    NotificationComponent
  ]
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders<NotificationModule>{
    return {
      ngModule: NotificationModule,
      providers: [
        NotificationService
      ]
    }
  };

}
