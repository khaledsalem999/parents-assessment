import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = of([]);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers().pipe(
      map((response: { data: User[] }) => response.data)
    );
  }
}