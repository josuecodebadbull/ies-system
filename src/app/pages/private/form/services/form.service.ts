import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private readonly env = environment.urlCatalog;

  constructor(private http: HttpClient) { }

  getCatalog() {
    return this.http.post(this.env, {});
  }

  getCatalogFake(){
    return this.http.get('../../../../assets/catalog/catalog.json');
  }
}
