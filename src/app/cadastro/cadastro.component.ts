import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  ocultarOpcoes: boolean = false;
  controleComponente: string = 'Mostrar CAMPOS';
  
  constructor(private router: Router,
              private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if(form.valid) {
      this.router.navigate(['./sucesso']);
    } else {
      alert('Formulário invalido!')
    }
  }

  mostrarcomponentes() {
    if(this.ocultarOpcoes) {
      this.ocultarOpcoes = !this.ocultarOpcoes;
      this.controleComponente = 'Mostrar CAMPOS';
    } else {
      this.ocultarOpcoes = !this.ocultarOpcoes;
      this.controleComponente = 'Esconder CAMPOS';
    }
  }
}
