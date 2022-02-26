import { Component, OnInit } from '@angular/core';
import { map, Subscription, switchMap, tap } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription[] = [];

  constructor(private aut: AuthenticationService) { }

  ngOnInit(): void { }

  logar(){}
}
