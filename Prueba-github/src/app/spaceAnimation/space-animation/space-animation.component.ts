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
    
  }

}
