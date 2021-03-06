import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
   'email': [
     { type: 'required', message: 'Se requiere un correo' },
     { type: 'pattern', message: 'Ingrese un correo valido.' }
   ],
   'password': [
     { type: 'required', message: 'Se requiere una contraseña' },
     { type: 'minlength', message: 'La contraseña debe contener 6 caracteres' }
   ]
 };

  constructor(public navCtrl: NavController, public navParams: NavParams,   private formBuilder: FormBuilder,private authService: FirebaserestProvider) {
  }

  ionViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  tryRegister(value){
  this.authService.doRegister(value)
   .then(res => {
     console.log(res);
     this.errorMessage = "";
     this.successMessage = "Se creo su cuenta, Inicie Sesión";
   }, err => {
     console.log(err);
     this.errorMessage = err.message;
     this.successMessage = "";
   })
}

goLoginPage(){
  this.navCtrl.pop();
}


}
