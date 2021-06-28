import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAnimationComponent } from './space-animation.component';

describe('SpaceAnimationComponent', () => {
  let component: SpaceAnimationComponent;
  let fixture: ComponentFixture<SpaceAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
