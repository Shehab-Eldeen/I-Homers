import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.createForgetPasswordForm();
    this.translate.use('en')
  }

  createForgetPasswordForm() {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    }) 
  }

}
