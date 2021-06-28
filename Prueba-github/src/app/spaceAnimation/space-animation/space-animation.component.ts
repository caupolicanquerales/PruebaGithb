import { Component, OnInit } from '@angular/core';
import * as animationSpace from 'src/app/jsFile/space-animation.js';

@Component({
  selector: 'app-space-animation',
  templateUrl: './space-animation.component.html',
  styleUrls: ['./space-animation.component.css']
})
export class SpaceAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    animationSpace.setAnimation();
    animationSpace.setCircle(250,50,30,"green");
    animationSpace.setCircle(50,100,40,"blue");
    animationSpace.setCircle(120,130,30,"red");
  }

}
