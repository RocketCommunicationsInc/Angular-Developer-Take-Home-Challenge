import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AlertsListComponent } from '@grmAlerts/components/alerts-list/alerts-list.component'

/**
 * GRM Alerts component tests
 */
describe('AlertsListComponent', () => {
  let component: AlertsListComponent
  let fixture: ComponentFixture<AlertsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsListComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
