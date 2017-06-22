import * as session from '@/services/session';

export const authenticate = (username, password) => session.authenticate(username, password);
