import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentsLibComponent } from './web-components-lib.component';

describe('WebComponentsLibComponent', () => {
  let component: WebComponentsLibComponent;
  let fixture: ComponentFixture<WebComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebComponentsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
