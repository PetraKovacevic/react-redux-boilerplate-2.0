import * as storage from '@/services/storage';

export function getCurrentUser() {
    return storage.get('currentUserDetails');
}

export function setCurrentUser(user) {
    storage.set('currentUserDetails', user);
}

export function removeCurrentUser() {
    storage.remove('currentUserDetails');
}