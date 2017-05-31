import session from '@/services/session';

export const signIn = (username, password) => session.authenticate(username, password);
