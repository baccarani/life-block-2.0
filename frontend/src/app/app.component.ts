import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title:string = '';
  Tvalue:any
  constructor(private route:Router){
    
  }
 

  getHeader(){
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }

 
  ngOnInit() {
   
  }
  
  handleValue(value: boolean): void {
    console.log('event emitter is working: ' + value);
  }

  
}
