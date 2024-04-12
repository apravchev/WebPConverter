import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromWebpComponent } from './from-webp.component';

describe('FromWebpComponent', () => {
  let component: FromWebpComponent;
  let fixture: ComponentFixture<FromWebpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromWebpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FromWebpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
