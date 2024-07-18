import { createReducer, on } from '@ngrx/store';
import { User } from './../models/user.model';
import * as UserActions from './users.action';

export interface State {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: State = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(UserActions.deleteUserSuccess, (state, { id }) => ({ ...state, users: state.users.filter(user => user.id !== id) })),
  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => (u.id === user.id ? user : u))
  }))
);
