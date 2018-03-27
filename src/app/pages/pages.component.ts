import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

	projRef:any = null;
	resources:any = [
	];
	resource:any = {};

	constructor ( _route:ActivatedRoute, private _http:HttpClient ) {

		_route.params
			.subscribe(
				res => {
					
					if ( res['proj'] ) {
						// this.projRef = res['proj'];
						this.projRef = res['proj'].split('+').join(' ');
					}
				}
			)

		if ( this.projRef != null ) this.getResources( this.projRef )

	}

	ngOnInit() {
	}

	getResources (ref) {
		this._http.get('assets/project.json')
			.subscribe(
				res => {
					this.resources = res;
					console.log( res );
					this.resources.forEach( (x,i) => {
						if ( x.name === this.projRef ) {
							this.resource = x;
							console.log( this.resource );
						}
					})
				}
			)
	}

	

}
