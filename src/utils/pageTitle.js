'use strict';

import appConfig from '../config';

class PageTitle {
    static title(pageName) {
        return pageName + appConfig.pageTitleSeparator + appConfig.appName;
    }
}

export default PageTitle;
