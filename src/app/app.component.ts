import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
	selector:'my-app',
	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Tour of Heros';
	constructor(private heroService: HeroService ){}
	test():void{
		this.heroService.test().then(obj =>{console.log(obj);});
	}
}