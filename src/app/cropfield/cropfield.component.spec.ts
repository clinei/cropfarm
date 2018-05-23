import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropfieldComponent } from './cropfield.component';

describe('CropfieldComponent', () => {
  let component: CropfieldComponent;
  let fixture: ComponentFixture<CropfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
