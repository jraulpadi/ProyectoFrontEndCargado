import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargalocalComponent } from './cargalocal.component';

describe('CargalocalComponent', () => {
  let component: CargalocalComponent;
  let fixture: ComponentFixture<CargalocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargalocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargalocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
