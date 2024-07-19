import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  @Input() user: User | null = null;
  @Output() confirm = new EventEmitter<void>();

  onDelete() {
    this.confirm.emit();
  }
}
