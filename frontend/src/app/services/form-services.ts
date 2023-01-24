import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FormService{

public form_one: any = [];
public form_two:any = [];
public value:any = [];
public  BothFormValue = new BehaviorSubject<any>([]);

getBothFormValue(data: any){
    this.value.push(data)
    // return this.BothFormValue.asObservable(); 
}

getfromOne(data:any){
    this.form_one.push(data);
    // this.BothFormValue.next(this.BothFormValue);
    
}
getfromTwo(data:any){
    this.form_two.push(data);
    // this.BothFormValue.next(this.BothFormValue);
    
}
getFormValue(){
    this.value.push(this.form_one)
    this.value.push(this.form_two);
    return this.value;
}
}