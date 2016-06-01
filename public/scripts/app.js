angular.module('angular-device-helper', [])
    .factory('DeviceHelper', [function () {
        function getUserAgent() {
            return window.navigator.userAgent || window.navigator.vender || window.opera;
        }

        return {
            isInWechatBrowser: function () {
                return /MicroMessenger/i.test(getUserAgent());
            },

            isMobile: function () {
                return /mobile/i.test(getUserAgent());
            },

            isPad: function () {
                return /nexus/i.test(getUserAgent());
            },

            getCurrentUrlWithoutQueryStringNorHash: function () {
                return window.location.protocol + '//' + window.location.host + window.location.pathname;
            },

            getCookie: function (name) {
                if (document.cookie.length > 0) {
                    var start = document.cookie.indexOf(name + '=');
                    if (start >= 0) {
                        start += name.length + 1;
                        var end = document.cookie.indexOf(';', start);
                        if (end === -1) {
                            end = document.cookie.length;
                        }
                        return window.unescape(document.cookie.substring(start, end));
                    }
                }

                return null;
            },

            setCookie: function (name, value) {
                var expires = new Date();
                expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24 * 30 * 12);

                document.cookie = name + '=' + value + '; expires=' + (expires.toUTCString()) + '; path=/;';
            }
        };
    }])
;