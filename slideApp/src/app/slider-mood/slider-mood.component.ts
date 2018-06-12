import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-mood',
  templateUrl: './slider-mood.component.html',
  styleUrls: ['./slider-mood.component.scss']
})
export class SliderMoodComponent implements OnInit {

    public myInterval: number = 3000;
    public activeSlideIndex: number = 0;
    public noWrapSlides:boolean = false;

    activeSlideChange(){
        console.log(this.activeSlideIndex);
    }

    public slides:Array<Object> = [
        {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg",
      "text":"tas ir kruto"},
        {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg",  "text":"pazud"},
        {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg",     "text":"lalalalal"},
    ];

  

  constructor() { }

  ngOnInit() {
  }

}


