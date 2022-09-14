import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of, Observable } from 'rxjs';



@Injectable()
export class HeaderTitleService {

    private subject = new BehaviorSubject<boolean>(false);
    sharedMessage = this.subject.asObservable();

    // public onSettingsScreen = false;
    // public onLoginScreen = false;

    public onSettingsScreen = this.subject.asObservable();
    public onLoginScreen = this.subject.asObservable();

    constructor() { }

    nextMessage(onLoginScreen: boolean) {
        this.subject.next(onLoginScreen);
    }


    myObservable = new Observable((observer) => {
        console.log('Observable starts');
        observer.next("1");
    });



    ngOnInit() {
        this.myObservable.subscribe((val) => {
            console.log(val);
        })
    }


}