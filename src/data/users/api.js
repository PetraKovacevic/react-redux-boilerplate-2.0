import _ from 'lodash';
import * as api from '@/services/api';
import { generatePassword } from '@/utils';

const endPoints = {
    create: 'users',
    get: 'users',
    check: 'users',
    update: 'users',
    post: 'users',
    put: 'users'
};

export function get() { return api.get(endPoints.get); };
export function getUser(uuid) { return api.get(`${endPoints.get}/${uuid}`); }
export function checkUniqueEmail(email) { return api.head(`${endPoints.check}/${encodeURIComponent(email)}/email`); }
export function updateUser(userUuid, data) { return api.patch(`${endPoints.update}/${userUuid}`, data); }
export function saveUser(uuid, data) { return _.isEmpty(uuid) ? createUser(data) : updateUser(uuid, data); }
export function setNewPassword(userEmail, resetUuid, password) { return api.post(`${endPoints.post}/${encodeURIComponent(userEmail)}/password-resets/${resetUuid}`, { password: password }); }
export function resetPassword(userEmail, resetUuid, password) { return api.put(`${endPoints.put}/${encodeURIComponent(userEmail)}/password-resets/${resetUuid}`, { password: password }); }
export function validateResetUuid(userEmail, resetUuid) { return api.head(`${endPoints.put}/${encodeURIComponent(userEmail)}/password-resets/${resetUuid}`); }
export function requestPasswordReset(userEmail, resetUrl) { return api.post(`${endPoints.post}/${encodeURIComponent(userEmail)}/password-resets`, { resetUrl: resetUrl }); }
export function create(data) {
    if (_.isEmpty(data.password)) {
        data.password = generatePassword();
    }
    return api.post(endPoints.create, data);
};
