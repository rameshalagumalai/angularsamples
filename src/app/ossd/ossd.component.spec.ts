import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OssdComponent } from './ossd.component';

describe('OssdComponent', () => {
  let component: OssdComponent;
  let fixture: ComponentFixture<OssdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OssdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OssdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
