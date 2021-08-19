import Cookies from 'js-cookie';
import React from 'react'

const Auth = {
    only: (user) => {
        switch (user) {
            case "auth":
                return Auth.checked();
            case "admin":
                if (Auth.checked()) {
                    return Auth.user().roles.some((element) => element.name === "admin");  
                } else return false;
        }
    },
    checked : () => {
        return Cookies.get("Auth_User") ? true : false;
    },
    user: () => {
        return JSON.parse(Cookies.get("Auth_User"))
    },
    getRole: () => {
        return Object.keys(Auth.user().roles).reduce(function (r, k) {
            return r.concat(k, Auth.user().roles[k]);
        }, [])[1].name;
    
    }
    
}
export default Auth;