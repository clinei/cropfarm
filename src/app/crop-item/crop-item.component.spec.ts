import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropItemComponent } from './crop-item.component';

describe('CropItemComponent', () => {
  let component: CropItemComponent;
  let fixture: ComponentFixture<CropItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
