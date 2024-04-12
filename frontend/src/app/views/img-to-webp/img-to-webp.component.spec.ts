import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgToWebpComponent } from './img-to-webp.component';

describe('ImgToWebpComponent', () => {
  let component: ImgToWebpComponent;
  let fixture: ComponentFixture<ImgToWebpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgToWebpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgToWebpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
