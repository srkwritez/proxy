function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "vrf-gl-sites.kao.wcm-ecm*|vrf-gl-public.kao.wcm-ecm.com*"))
        return "PROXY 10.22.63.22:3000";

    // by default use no proxy
    return "DEFAULT";
}
