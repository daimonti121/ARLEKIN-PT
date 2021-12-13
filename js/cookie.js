// Register visit from affiliate with_stag
// GET /api/info/locales?stag=123_321
// Example 3: If you use new affiliate system you should do the same request with stag parameter instead of refer parameter. In this example player comes to https://your-casino.com?stag=123_321 and API request to https://your-casino-api.com/api/info/locales?stag=123_321 should be performed.
// Request
// Accept: application/vnd.softswiss.v1+json
// Content-Type: application/json

// GET /api/info/locales?stag=123_321

// stag: 123_321
// cURL
// curl -g "https://s2.casino.softswiss.com/api/info/locales?stag=123_321" -X GET \
// 	-H "Accept: application/vnd.softswiss.v1+json" \
// 	-H "Content-Type: application/json"
// Response
 
// X-SoftSwiss-Media-Type: softswiss.v1
// Content-Type: application/vnd.softswiss.v1+json; charset=utf-8

// 200 OK

[
  {
    "code": "ar",
    "name": "Arabic",
    "name_in_locale": "translation missing: ar.locales.ar",
    "default": false
  },
  {
    "code": "bg",
    "name": "Bulgarian",
    "name_in_locale": "translation missing: bg.locales.bg",
    "default": false
  },
  {
    "code": "cs",
    "name": "Czech",
    "name_in_locale": "translation missing: cs.locales.cs",
    "default": false
  },
  {
    "code": "da",
    "name": "Danish",
    "name_in_locale": "translation missing: da.locales.da",
    "default": false
  },
  {
    "code": "de",
    "name": "German",
    "name_in_locale": "translation missing: de.locales.de",
    "default": false
  },
  {
    "code": "el",
    "name": "Greek",
    "name_in_locale": "translation missing: el.locales.el",
    "default": false
  },
  {
    "code": "en",
    "name": "English",
    "name_in_locale": "English",
    "default": true
  },
  {
    "code": "es",
    "name": "Spanish",
    "name_in_locale": "translation missing: es.locales.es",
    "default": false
  },
  {
    "code": "et",
    "name": "Estonian",
    "name_in_locale": "translation missing: et.locales.et",
    "default": false
  },
  {
    "code": "fi",
    "name": "Finnish",
    "name_in_locale": "translation missing: fi.locales.fi",
    "default": false
  },
  {
    "code": "fr",
    "name": "French",
    "name_in_locale": "translation missing: fr.locales.fr",
    "default": false
  },
  {
    "code": "hi",
    "name": "Hindi",
    "name_in_locale": "translation missing: hi.locales.hi",
    "default": false
  },
  {
    "code": "hr",
    "name": "Croatian",
    "name_in_locale": "translation missing: hr.locales.hr",
    "default": false
  },
  {
    "code": "hu",
    "name": "Hungarian",
    "name_in_locale": "translation missing: hu.locales.hu",
    "default": false
  },
  {
    "code": "id",
    "name": "Indonesian",
    "name_in_locale": "translation missing: id.locales.id",
    "default": false
  },
  {
    "code": "is",
    "name": "Icelandic",
    "name_in_locale": "translation missing: is.locales.is",
    "default": false
  },
  {
    "code": "it",
    "name": "Italian",
    "name_in_locale": "translation missing: it.locales.it",
    "default": false
  },
  {
    "code": "ja",
    "name": "Japanese",
    "name_in_locale": "translation missing: ja.locales.ja",
    "default": false
  },
  {
    "code": "ka",
    "name": "Georgian",
    "name_in_locale": "translation missing: ka.locales.ka",
    "default": false
  },
  {
    "code": "kk",
    "name": "Kazakh",
    "name_in_locale": "translation missing: kk.locales.kk",
    "default": false
  },
  {
    "code": "ko",
    "name": "Korean",
    "name_in_locale": "translation missing: ko.locales.ko",
    "default": false
  },
  {
    "code": "ms",
    "name": "Malay",
    "name_in_locale": "translation missing: ms.locales.ms",
    "default": false
  },
  {
    "code": "nl",
    "name": "Dutch",
    "name_in_locale": "translation missing: nl.locales.nl",
    "default": false
  },
  {
    "code": "nn",
    "name": "Norwegian Nynorsk",
    "name_in_locale": "translation missing: nn.locales.nn",
    "default": false
  },
  {
    "code": "no",
    "name": "Norwegian",
    "name_in_locale": "translation missing: no.locales.no",
    "default": false
  },
  {
    "code": "pl",
    "name": "Polish",
    "name_in_locale": "translation missing: pl.locales.pl",
    "default": false
  },
  {
    "code": "pt",
    "name": "Portuguese",
    "name_in_locale": "translation missing: pt.locales.pt",
    "default": false
  },
  {
    "code": "ro",
    "name": "Romanian",
    "name_in_locale": "translation missing: ro.locales.ro",
    "default": false
  },
  {
    "code": "ru",
    "name": "Russian",
    "name_in_locale": "Русский",
    "default": false
  },
  {
    "code": "sk",
    "name": "Slovak",
    "name_in_locale": "translation missing: sk.locales.sk",
    "default": false
  },
  {
    "code": "sl",
    "name": "Slovenian",
    "name_in_locale": "translation missing: sl.locales.sl",
    "default": false
  },
  {
    "code": "sr",
    "name": "Serbian",
    "name_in_locale": "translation missing: sr.locales.sr",
    "default": false
  },
  {
    "code": "sv",
    "name": "Swedish",
    "name_in_locale": "translation missing: sv.locales.sv",
    "default": false
  },
  {
    "code": "sq",
    "name": "Albanian",
    "name_in_locale": "translation missing: sq.locales.sq",
    "default": false
  },
  {
    "code": "th",
    "name": "Thai",
    "name_in_locale": "translation missing: th.locales.th",
    "default": false
  },
  {
    "code": "tl",
    "name": "Tagalog",
    "name_in_locale": "translation missing: tl.locales.tl",
    "default": false
  },
  {
    "code": "tr",
    "name": "Turkish",
    "name_in_locale": "translation missing: tr.locales.tr",
    "default": false
  },
  {
    "code": "zh-CN",
    "name": "Chinese",
    "name_in_locale": "translation missing: zh-CN.locales.zh-CN",
    "default": false
  },
  {
    "code": "uk",
    "name": "Ukrainian",
    "name_in_locale": "translation missing: uk.locales.uk",
    "default": false
  },
  {
    "code": "vi",
    "name": "Vietnamese",
    "name_in_locale": "translation missing: vi.locales.vi",
    "default": false
  }
]
