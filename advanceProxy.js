function FindProxyForURL(url, host)
 {
 if (isResolvable(host))
 return "DIRECT";
 else
 return "PROXY 10.22.63.22:3000";
 }