import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
@Output()
emitSignInAction:EventEmitter<string> = new EventEmitter()
navigatetoSignIn(){
  this.emitSignInAction.emit("Login")
}



}
