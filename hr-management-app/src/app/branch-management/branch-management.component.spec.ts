import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagementComponent } from './branch-management.component';

describe('BranchManagementComponent', () => {
  let component: BranchManagementComponent;
  let fixture: ComponentFixture<BranchManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchManagementComponent]
    });
    fixture = TestBed.createComponent(BranchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
