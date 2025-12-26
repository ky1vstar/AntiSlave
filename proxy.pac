function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, ".fozzy.lan")) {
		return "PROXY fozzy-vpn:8001";
	} else if (dnsDomainIs(host, ".silpo.dev") || dnsDomainIs(host, ".foodtech.loc")) {
		return "PROXY fozzy-vpn:8002";
	} else {
		return "DIRECT";
	}
}

