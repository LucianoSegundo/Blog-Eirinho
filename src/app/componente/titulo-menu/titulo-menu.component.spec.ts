import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloMenuComponent } from './titulo-menu.component';

describe('TituloMenuComponent', () => {
  let component: TituloMenuComponent;
  let fixture: ComponentFixture<TituloMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
