
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

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
signUpForm!:FormGroup
displayOtpInput:boolean = false
displayVerifybtn:boolean = false

otpGenerate!:number
matchedOtp!:number

constructor(private formB:FormBuilder){

}

ngOnInit(): void{
  this.initializeForm()
}

getOtp(){
  this.displayOtpInput = true
  this.displayVerifybtn = true
  this.otpGenerate = Math.floor(1000+Math.random() * 9000)
  console.log("otp genetated" , this.otpGenerate)
  alert(this.otpGenerate)
}

matchOtp(data:any){
  if(data){
    this.matchedOtp = data.target.value
    console.log("otp entered is" , this.matchedOtp)
  }
}

VerifyOtp(){
 if(this.matchedOtp && (this.otpGenerate == this.matchedOtp)){
  // this.displayVerifybtn = false
  this.displayOtpInput = false
  this.signUpForm.get('VerifiedOTP')?.setValue(true)
 } else {
  alert("otp mot matched")
 }
}

initializeForm(){
  this.signUpForm = this.formB.group({
    'username': ['',[Validators.required]],
    'password': ['',[Validators.required]],
    'mail': [''],
    'mobile':['',[Validators.required, Validators.maxLength(11),Validators.minLength(10)]],
    'VerifiedOTP': [false]
  })
}
}
