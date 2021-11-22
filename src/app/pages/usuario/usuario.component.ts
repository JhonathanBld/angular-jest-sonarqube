import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UsuarioService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnDestroy {

  public form:FormGroup;
  public novo: boolean = true;

  constructor(private usuarioservice: UsuarioService) {

    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    
    let usuario: any = {};
    usuario = JSON.parse(<string>localStorage.getItem('usuarioEditado'));
    if (usuario) {
      this.novo = false;
      this.form.setValue(usuario);
    } else {
      this.novo = true;
    }
  }

  mensagemErroEmail() {
    if (this.form.controls.email.hasError('required')) {
      return 'O e-mail é obrigatório.'
    } 
    return this.form.controls.email.hasError('email') ? 'Não é um endereço de e-mail válido.' : '';
   
  }

  cadastrarNovoUsuario() {
    if (this.form.valid) {
      this.usuarioservice.save(this.form.value).then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Usuário cadastrado',
        }).then();
      })
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('usuarioEditado');
  }
}
