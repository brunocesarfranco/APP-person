import { environment } from "src/environments/environment";

export class ApiRotas{

    static rotaApi: string = environment.apiUrl;

    static getPerson(){
        return this.rotaApi + '/api/Person';
    }    
    static criarPerson(){
        return this.rotaApi + '/api/Person';
    }    
    static getPersonById(){
        return this.rotaApi + `/api/Person`;
    }
    
    static putPersonId(id: number){
        return this.rotaApi + `/api/Person/${id}`;
    }
        
    static DeletePerson(id: number){
        return this.rotaApi + `/api/Person/${id}`;
    }
}