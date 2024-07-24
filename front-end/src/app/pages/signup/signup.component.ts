import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  constructor(
    private fb: FormBuilder,
    private auth: AuthService, private router: Router){}

    ngOnInit() {
      this.signUpForm = this.fb.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        userName:['', Validators.required],
        email:['', Validators.required],
        password:['', Validators.required]
      })
    }


hideShowPass() {
  if (this.type === 'password') {
    this.type = 'text';
    this.eyeIcon = 'fa-eye';
  } else {
    this.type = 'password';
    this.eyeIcon = 'fa-eye-slash';
  }
}
onSubmit() {
  if (this.signUpForm.valid) {
    
    this.auth.signUp(this.signUpForm.value).subscribe({
      next: (res) => {
        alert(res.message);
        this.signUpForm.reset();
        this.router.navigate(['login']);
      },
      error: (err) => {
        alert(err?.error.message);
      }
    })
  } else {
    alert("Your form is invalid");
  } 
}
}