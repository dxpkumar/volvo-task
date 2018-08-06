import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import { UserService } from '../../service/user.service';
import { Router } from '../../../../node_modules/@angular/router';
import { FindUserPipe } from '../../pipe/find-user.pipe';

describe('UserListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        UserListComponent,
        FindUserPipe
      ],
      providers: [ {provide: UserService }, {provide: Router} ]
    }).compileComponents();
  }));

  //Test case 4 - user list component
  it('should create the UserList Component - test 4', async(() => {
    const fixture = TestBed.createComponent(UserListComponent);
    const listComp = fixture.debugElement.componentInstance;
    expect(listComp).toBeTruthy();
  }));
  
  //Test case 5 - user list component
  it(`should have as title search string as undefined initially - test 5`, async(() => {
    const fixture = TestBed.createComponent(UserListComponent);
    const listComp = fixture.debugElement.componentInstance;
    expect(listComp.queryString).toBeUndefined();
  }));

});
