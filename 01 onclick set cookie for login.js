//if a user clicks the "login" button in the shopping cart, we will drop a cookie when a user clicks on the "login and checkout" button. Once the cookie is dropped, we will wait for the login to happen, and once that happens, we will trigger "login event" for Adobe Analytics and remove the cookie. Everything will happen within the same code. 

var url = window.document.URL; 
var pathName = window.location.pathname;
if (getCookie("loginIntent")) {
    
} else {
 if ((url.indexOf("/bag") > -1 ) && (utag.data.product_id.length > -1)){
    $('.js-oneidsignin-cart').click(function() {
        document.cookie = "loginIntent=basketClickLogin;path="+pathName+"";
    });
}
}

//check for cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 
getCookie("loginIntent")
