//if a user clicks the "login" button in the shopping cart, we will drop a cookie when a user clicks on the "login and checkout" button. Once the cookie is dropped, we will wait for the login to happen, and once that happens, we will trigger "login event" for Adobe Analytics and remove the cookie. Everything will happen within the same code. 
var date = new Date();
date.setTime(date.getTime() + (120 * 1000));

var url = window.document.URL; 
var pathName = window.location.pathname;

 if ((url.indexOf("/bag") > -1 ) && (utag.data.product_id.length > -1)){
    $('.js-oneidsignin-cart').click(function() {
        if (!getCookie("loginIntent")) {
            document.cookie = "loginIntent=basketClickLogin"+"; expires="+date+"+;path="+pathName+"";
        } else {}
    });
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
    


//additional logic to be used on basket page. 

if (b["t_customer_id"].length > 0) { 
b.user_status = "logged in";
b.tealium_event = "user_login_succes";
 }
