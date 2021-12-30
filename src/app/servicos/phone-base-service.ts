import { Observable } from "rxjs";
import { ListResponse } from "../modelos/response/response-get";

export abstract class PhoneBaseService{

    abstract  getExamples(): Observable<ListResponse>;
    abstract  postPerson(nome:string): Observable<ListResponse>;
    abstract  deleteExamplesById(id:number): Observable<ArrayBuffer>;
    abstract  putExamplesById(id:number, personName: string): Observable<ListResponse>;
    

}