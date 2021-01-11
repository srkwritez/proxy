// This PAC file only proxies what is in proxy_list

function FindProxyForURL(url, host) {
  // Variables defined for Proxy=Yes and Proxy=No
  var proxy_yes = "PROXY 196.12.41.80:3000";
  var proxy_no = "DIRECT";
  // List of all domains you want to Proxy  
  var proxy_list = Array(
  "*.sites.kao.com/*",
  "*.kao.wcm-ecm.com/*",
  "*.aem.kao.com/*",
  "*.whatsmyip.org/*",
  "*.elb-flowerking01.info/*"
  );
        
  // This goes through the list of domains above for the request 
  // to see if it matches anything in the List
  // If the reuqest matches a domain in the list above, 
  // the request will be proxied
  for(var iter = 0; iter < proxy_list.length; ++iter) {
    if(shExpMatch(url, proxy_list[iter])) {
      return proxy_yes;
    }
  }
        
  // DEFAULT RULE: All other traffic, send direct.  
  return proxy_no;
}
