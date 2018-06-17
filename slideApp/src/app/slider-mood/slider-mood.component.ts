import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-mood',
  templateUrl: './slider-mood.component.html',
  styleUrls: ['./slider-mood.component.scss']
})
export class SliderMoodComponent implements OnInit {

    public myInterval: number = 0;
    public activeSlideIndex: number = 0;
    public noWrapSlides:boolean = false;

    activeSlideChange(){
        console.log(this.activeSlideIndex);
    }

    public slides:Array<Object> = [
        {"image":"https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg",
      "text":"Лия ты"},
        {"image":"https://mdbootstrap.com/img/Photos/Others/img%20(41).jpg",  "text":"Самая обалденная, клевая, шикарная"},
        {"image":"https://mdbootstrap.com/img/Photos/Others/img%20(49).jpg",     "text":"просто БОГИНЯ"},
    ];

  

  constructor() { }

  ngOnInit() {
  }

}


