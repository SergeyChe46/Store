import { Observable } from 'rxjs';

export interface IRepository<T, TviewModel> {
  getAll(): Observable<T[]>;
  getById(id: number): Observable<T>;
  create(entity: TviewModel): Observable<T>;
  update(id: number, entity: T): Observable<T>;
  delete(id: number): Observable<T>;
}
