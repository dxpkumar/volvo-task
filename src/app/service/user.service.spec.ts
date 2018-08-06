import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });


  it('should be created - test6', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
