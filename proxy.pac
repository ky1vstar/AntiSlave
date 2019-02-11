function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "vk.com") || dnsDomainIs(host, "vkontakte.ru") || dnsDomainIs(host, "userapi.com") || dnsDomainIs(host, "vk.cc") || dnsDomainIs(host, "vk-cdn.net") || dnsDomainIs(host, "vkuservideo.net")
	|| dnsDomainIs(host, "mail.ru") || dnsDomainIs(host, "attachmail.ru") || dnsDomainIs(host, "imgsmail.ru") || dnsDomainIs(host, "mradx.net") || dnsDomainIs(host, "mail.ua")
	|| dnsDomainIs(host, "ok.ru")
	|| dnsDomainIs(host, "yandex.ru") || dnsDomainIs(host, "yadi.sk") || dnsDomainIs(host, "yandex.ua") || dnsDomainIs(host, "yandex.st") || dnsDomainIs(host, "yandex.net") || dnsDomainIs(host, "yastatic.net")
	|| dnsDomainIs(host, "worldoftanks.ru") || dnsDomainIs(host, "wargaming.net")
	|| dnsDomainIs(host, "kinopoisk.ru")
	|| dnsDomainIs(host, "inbox.ru"))
		return "PROXY vds.ky1vstar.pp.ua:23";
	return "DIRECT";
}
