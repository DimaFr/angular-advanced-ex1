import { Directive, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators'

@Directive({ selector: '[app-tasks-search]' })
export class TasksSearchDir implements OnDestroy {

    @Output() private searchTxtEvent = new EventEmitter<string>();

    constructor(private el: ElementRef) {
      
    }

    private searchStr: BehaviorSubject<string> = new BehaviorSubject('');

    private searchStr$ = this.searchStr.asObservable()
        .pipe(
            //throttleTime(1000)//does not emit events that were in that time (1sec)
            debounceTime(1000),//waits 1 sec then emits last event
            distinctUntilChanged(),//filters out letter then backspace 
            //may be filter out empty strings and add rule of ** to return all results
           
        )
        .subscribe(
            res => {

                this.searchTxtEvent.emit(res);
            });

    private keyUp$ = fromEvent(this.el.nativeElement, 'keyup')
        .subscribe(
            (res: any) => {
            this.searchStr.next(this.el.nativeElement.value)
        });
    /*another option ? to use host listener */
   // @HostListener('window:keyup') onKeyUp(e:KeyboardEvent){
   //      this.searchStr.next(this.el.nativeElement.value);
   // }
    
    ngOnDestroy() {
        this.keyUp$.unsubscribe()

    }
}