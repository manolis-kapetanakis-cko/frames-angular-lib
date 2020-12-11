import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MultiFramesComponent } from './multi-frames.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MultiFramesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MultiFramesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frames-angular'`, () => {
    const fixture = TestBed.createComponent(MultiFramesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frames-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MultiFramesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('frames-angular app is running!');
  });
});
