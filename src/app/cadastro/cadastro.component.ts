import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if(form.valid) {
      this.router.navigate(['./sucesso']);
      this.focoInput();
    } else {
      alert('Formulário invalido!')
    }
    console.log(form.controls);
  }

  focoInput() {
    this.renderer.selectRootElement('#cidade').focus();
  }
}
