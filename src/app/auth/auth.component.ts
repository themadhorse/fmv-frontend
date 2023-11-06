import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../api/services';
import { BaseService } from '../api/base-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isSigningIn = true;

  constructor(private assetsService: AssetsService) { }

  ngOnInit(): void {
  }

  onSubmit(email: string, password: string, signin: boolean) {
    if(signin)
      console.log("Signin: " + email, password)
    else
      console.log("Signup: " + email, password)
  }
}
