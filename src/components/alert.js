'use strict';

import sAlert from 'react-s-alert';
import React from 'react';

let sAlertConfig = {
    position: 'bottom-left'
};

class Alert {

    static warning(message, config = sAlertConfig) {
        return sAlert.warning(message, config);
    }

    static error(message, config = sAlertConfig) {
        return sAlert.error(message, config);
    }

    static info(message, config = sAlertConfig) {
        return sAlert.info(message, config);
    }

    static success(message, config = sAlertConfig) {
        return sAlert.success(message, config);
    }

    static close(alertId) {
        return sAlert.close(alertId);
    }

    static closeAll() {
        return sAlert.closeAll();
    }

}

export default Alert;
