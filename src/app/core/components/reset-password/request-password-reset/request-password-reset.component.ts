import { Component, OnInit } from '@angular/core';
import { Error } from "../../../../shared/models/errors";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestPasswordResetService } from '../services/request-password-reset.service';
import { handleErrorRequestPasswordReset } from '../utilities/handle-error-request-password-reset';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.scss']
})
export class RequestPasswordResetComponent implements OnInit {

  private subscription: Subscription[] = [];

  formRequestPasswordReset = new FormGroup({});
  errorReturn: Error | null = null;

  constructor(
    private requestPasswordResetService: RequestPasswordResetService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe);
  }

  requestPasswordReset() {
    if (this.formRequestPasswordReset.valid) {
      const { CPF } = this.formRequestPasswordReset.value;

      this.subscription.push(
        this.requestPasswordResetService.requestPasswordReset({ CPF })
          .subscribe({
            next: () => {

            },
            complete: () => { },
            error: (err) => {
              this.errorReturn = handleErrorRequestPasswordReset(err)
            }
          })
      );
    }
  }

  backToLogin() {
    this.router.navigateByUrl('login')
  }

  private createForm() {
    this.formRequestPasswordReset = this.fb.group({
      "CPF": [null, [Validators.required]]
    });
  }
}
