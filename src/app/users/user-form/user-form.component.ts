import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user: User | null = null;
  @Output() save = new EventEmitter<User>();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: ['']
    });
  }

  ngOnChanges() {
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  onSave() {
    this.save.emit(this.userForm.value);
  }
}