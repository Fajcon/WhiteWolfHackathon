import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueConversationComponent } from './continue-conversation.component';

describe('ContinueConversationComponent', () => {
  let component: ContinueConversationComponent;
  let fixture: ComponentFixture<ContinueConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
