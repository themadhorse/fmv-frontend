import { Component } from '@angular/core';
import { BaseService } from './api/base-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fmv-frontend';

  constructor(private baseService: BaseService){
    baseService.rootUrl = "http://127.0.0.1:8000"
  }
}
