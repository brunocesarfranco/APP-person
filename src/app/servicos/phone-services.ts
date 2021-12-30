import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListResponse } from "../modelos/response/response-get";
import { ApiRotas } from "../rotas/api-rotas";
import { PhoneBaseService } from "./phone-base-service";

@Injectable()
export class PhoneService extends PhoneBaseService{

    deleteExamplesById(idperson: number): Observable<ArrayBuffer> {
        const apiUrl = ApiRotas.DeletePerson(idperson);
        return this.http.delete<ArrayBuffer>(apiUrl);   
     }
    putExamplesById(idperson: number, personName: string): Observable<ListResponse> {
        const apiUrl = ApiRotas.putPersonId(idperson);
        return this.http.put<ListResponse>(apiUrl,{
            nome: personName,
            id: idperson
        });    
    }

    constructor(private http:HttpClient) {
        super()
    }

    getExamples(): Observable<ListResponse>{
        const apiUrl = ApiRotas.getPerson();
        return this.http.get<ListResponse>(apiUrl);
    }

    postPerson(nomes:string): Observable<ListResponse> {
        const apiUrl = ApiRotas.getPersonById();
        return this.http.post<ListResponse>(apiUrl,{
            nome: nomes
        });
    }
  
}