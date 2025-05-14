import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent implements OnInit {

  planosSaude = [
    {
      id: 1,
      descricao: 'Plano 300 Enfermaria'
    },
    {
      id: 2,
      descricao: 'Plano 400 Enfermaria'
    },
    {
      id: 3,
      descricao: 'Plano 500 Plus'
    }
  ];

  planosOdonto = [
    {
      id: 1,
      descricao: 'Basic'
    },
    {
      id: 2,
      descricao: 'Medium'
    },
    {
      id: 3,
      descricao: 'Plus'
    }
  ];

  formUser: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  salveUser() {
    const objUserForm: User = this.formUser.getRawValue();
    this.userService.addUser(objUserForm).then((response: any) => {
      window.alert('Usuario foi cadastrado com sucesso');
      this.closeModal();
    }).catch(err => {
      window.alert('Houve um erro ao cadastrar usuário');
      console.error(err);
    });
    ;

  }

  closeModal() {
    this.dialogRef.close();
  }

  buildForm() {
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(2)]],
      role: [null, [Validators.required, Validators.minLength(5)]],
      healthPlan: [''],
      dentPlan: [''],
    });
  }

}
