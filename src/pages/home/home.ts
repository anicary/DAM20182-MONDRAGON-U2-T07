import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MenuPage } from '../menu/menu';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    'email': [
      { type: 'required', message: 'Se requiere un correo.' },
      { type: 'pattern', message: 'Ingresar un correo Valido.' }
    ],
    'password': [
      { type: 'required', message: 'Se requiere contraseña.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres.' }
    ]
  };
  constructor(
    public navCtrl: NavController,
    private authService: FirebaserestProvider,
    private formBuilder: FormBuilder
  ) {

  }
  ionViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }
  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.navCtrl.push(MenuPage);
    }, err => {
      this.errorMessage = err.message;
    })
  }
  goRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
}
