import { createAction, props } from '@ngrx/store';
import { User } from './../models/user.model';

export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User List] Load Users Failure', props<{ error: any }>());

export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: User }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: any }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: any }>());