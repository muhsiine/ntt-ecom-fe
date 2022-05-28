import { Observable } from 'rxjs';

export interface IServiceCommon{

    getAll():Observable<Object[]>;

}