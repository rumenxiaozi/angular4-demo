import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()

export class HeroService {
	private heroesUrl = 'api/heroes';  // URL to web api
  	constructor(private http: Http) { }

  	createAuthorizationHeader(headers:Headers) {
	    headers.append('x-dmp-access-token', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiYWxsLXBhc3MiLCJpYXQiOjE0OTI0NjE5MDAsImV4cCI6MTUyMzk5NzkwMH0.FKftOV3c57PVRwQUGqCu1vAQAdAFTls4-nOBwc-0PofBVTWjscETQuaDrIb8acaYAbHekidW8UdZ4SbKj6ED4wwydlkVU8TatoqMn1UqGH5NY-4afyzZJj5Vkgcor0KejHOcDvNt-fnTUwB0KuT1iJ2jB1F1HIYnrCTvAUdyO3fttC-R_NM7hv3zmQRhpILqyJzJppPLXLh7ICBt6ODLPaaQUZeKMO6lXlMs-EfC6MIHUtVX98wR9pSOhrSktHMDnLCgGCRwWkK1wOLwUYqScHSHDgotkpWozQHBtemkEKqEC5h01n2FgxCzDrIOfJmaGv14GtNrATfrJzDiw7IoVg'); 
	  }

  	getHeroes(): Promise<Hero[]> {
	  	return Promise.resolve(HEROES);
	}
	getHero(id: number): Promise<Hero> {
	  const url = `${this.heroesUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as Hero)
	    .catch(this.handleError);
	}
	test():Promise<Object>{
		const url = 'https://dmp-api.consilient.ai/dev/v3/';
		var headers = new Headers();
    	this.createAuthorizationHeader(headers);
	  	return this.http.get(url,{headers:headers})
	    .toPromise()
	    .then(response => response.json().data as Hero)
	    .catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}
}
