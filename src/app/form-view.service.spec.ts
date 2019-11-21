import { TestBed } from '@angular/core/testing';

import { FormViewService } from '../form-view.service';

describe('FormViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormViewService = TestBed.get(FormViewService);
    expect(service).toBeTruthy();
  });
});
