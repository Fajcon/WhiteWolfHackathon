import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDoktorModalComponent } from './find-doktor-modal.component';

describe('FindDoktorModalComponent', () => {
  let component: FindDoktorModalComponent;
  let fixture: ComponentFixture<FindDoktorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDoktorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDoktorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
