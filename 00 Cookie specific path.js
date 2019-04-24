//purpose of this code is to use vanilla javascrip to store the information that is parsed through to utag_data and store it in a cookie. This is only useful if for some reason the data is not staying persistent through the subsequent calls made on the same page (especially true for Async Javacript calls).

//Specific paths that need to be treated with this special case where utag.data is not set

/*
shopdisney.co.uk/offers
shopdisney.de/zauberhafte-angebote
shopdisney.fr/offres
shopdisney.es/ofertas
shopdisney.it/offerte
*/

var pathName = window.location.pathname; //set the pathname of url
function setPfmCookie(){
var cookievalue = sitedl.listing.productFindingLogic; //set the value of the product_finding_method to "cookievalue"
document.cookie = "pfm="+cookievalue+";path="+pathName+"";
}

if ((pathName.indexOf("/offers") > -1) || (pathName.indexOf("/zauberhafte-angebote") > -1) || (pathName.indexOf("/offres") > -1) || (pathName.indexOf("/ofertas") > -1) || (pathName.indexOf("/offerte") > -1)) {
  if (document.cookie.indexOf("pfm") > -1) {
    b.product_finding_method = getCookie("pfm")
  } else {
    setPfmCookie() 
  }

}

//function that read the cookie, if it exists. 
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
