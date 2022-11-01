import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})

export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.registrer(this.formReg.value)
      .then(response => {
        console.log("hola se ingreso bien" + response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log("hola soy un error" + error));
  }

}