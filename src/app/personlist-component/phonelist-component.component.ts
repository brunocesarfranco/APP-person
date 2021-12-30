import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListResponse } from '../modelos/response/response-get';
import { PhoneBaseService } from '../servicos/phone-base-service';
import { PhoneService } from '../servicos/phone-services';

@Component({
  selector: 'app-phonelist-component',
  templateUrl: './phonelist-component.component.html',
  styleUrls: ['./phonelist-component.component.css'],
  providers: [{provide:PhoneBaseService, useClass:PhoneService}]
})
export class PhonelistComponentComponent implements OnInit {

  public teste: ListResponse;
  public lista: any = [];
  public currenteditindex? : number;
  public form: FormGroup = this.formulario.group({
    'nome': []
  })
  constructor(public phoneservice: PhoneBaseService, private formulario: FormBuilder) { }

  ngOnInit() {
    this.list();
  }
  
  criar(){
    let nome = this.form.controls['nome'].value;
    this.phoneservice.postPerson(nome).subscribe(p => {this.teste = p;
      this.list()})
  }
  list(){
    this.phoneservice.getExamples().subscribe(p => {this.teste = p;
      this.lista = this.teste.data.personObjects;
      console.log(this.lista)
    console.log(this.teste.data.personObjects)
 })
  }

  delete(person:any){
    this.phoneservice.deleteExamplesById(person.businessEntityId).subscribe(d =>{
      this.list();
    })
  }
  testee( listindex:number){
    this.currenteditindex = this.currenteditindex? null : listindex;

  }

  Editar(person:any, listindex:number){
    let nome = this.form.controls['nome'].value;
    this.phoneservice.putExamplesById(person.businessEntityId, nome).subscribe(
      e => {
        this.list();
      }
    )

  }
}
