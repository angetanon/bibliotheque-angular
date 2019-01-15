import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() { //créer un user de type formGroup via la méthode formBuilder.group({}): permettant de définir les valeurs des champs avec une valeur par défaut, et des champs réquis ou un pattern
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], //valide email
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]] //pattern de validation
    });
  }

  onSubmit() {
    const email = this.signUpForm.get('email').value; //charger les const email et password à partir de leur formControlName du formulaire
    const password = this.signUpForm.get('password').value;

    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
