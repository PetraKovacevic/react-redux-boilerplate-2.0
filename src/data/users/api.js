import _ from 'lodash';
import api from '@/services/api';
import { generatePassword } from '@/utils';

const endPoints = {
    create: 'users',
    get: 'users',
    check: 'users',
    update: 'users',
    post: 'users',
    put: 'users'
};

export const get = () => api.get(endPoints.get);
export const getUser = uuid => api.get(`${endPoints.get}/${uuid}`);
export const checkUniqueEmail = email => api.head(`${endPoints.check}/${encodeURIComponent(email)}/email`);
export const updateUser = (userUuid, data) => api.patch(`${endPoints.update}/${userUuid}`, data);
export const saveUser = (uuid, data) => _.isEmpty(uuid) ? createUser(data) : updateUser(uuid, data);
export const setNewPassword = (userEmail, resetUuid, password) => api.post(`${endPoints.post}/${encodeURIComponent(userEmail)}/password-resets/${resetUuid}`, { password: password });
export const resetPassword = (userEmail, resetUuid, password) => api.put(`${endPoints.put}/${encodeURIComponent(userEmail)}/password-resets/${resetUuid}`, { password: password });
export const validateResetUuid = (userEmail, resetUuid) => api.head(`${endPoints.put}/${encodeURIComponent(userEmail)}/password-resets/${resetUuid}`);
export const requestPasswordReset = (userEmail, resetUrl) => api.post(`${endPoints.post}/${encodeURIComponent(userEmail)}/password-resets`, { resetUrl: resetUrl });
export const create = data => {
    // If the password is not set generate a password for the user
    if (_.isEmpty(data.password)) {
        data.password = generatePassword();
    }
    return api.post(endPoints.create, data);
};
