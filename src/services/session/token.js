import jwtDecode from 'jwt-decode';

export function getToken() {
    return localStorage.getItem('token');
}

// Tries to decode jwt and checks the expiration date
export function isTokenValid() {
    let token = localStorage.getItem('token');
    if (token) {

        try {
            let decoded = jwtDecode(localStorage.getItem('token'));

            if( typeof decoded.exp === "undefined" ) {
                return false;
            }

            let date = new Date(0); // The 0 here is the key, which sets the date to the epoch
            date.setUTCSeconds(decoded.exp);

            return date.valueOf() > new Date().valueOf();

        } catch(error) {
            return false;
        }
    }

    return false;
}

export function shouldRefreshToken() {
    let token = localStorage.getItem('token');

    if (token) {

        try {
            let decoded = jwtDecode(localStorage.getItem('token'));

            if( typeof decoded.exp === "undefined" ) {
                return false;
            }

            let date = new Date(0); // The 0 here is the key, which sets the date to the epoch
            date.setUTCSeconds(decoded.exp);

            let now = new Date();

            return now.valueOf() < date.valueOf() && now.valueOf() > date.setMinutes(date.getMinutes() - 10);

        } catch(error) {
            return false;
        }
    }

    return false;
}
