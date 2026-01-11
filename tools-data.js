const tools = [
    {
      id: 1,
      name: "DetectDee",
      desc: "An OSINT tool designed to hunt down social media accounts using a username, email, or phone number across multiple social networks.",
      link: "https://github.com/willin22/DetectDee",
      category: "social",
      price: "Open-Source",
      rating: 1
    },
    {
      id: 2,
      name: "Have I Been Zuckered",
      desc: "Checks whether your personal data (email, phone, password) was leaked in Facebook/Meta breaches.",
      link: "https://haveibeenzuckered.com/",
      category: ["person", "phone"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 3,
      name: "Ignorant",
      desc: "An OSINT phone-number lookup tool that checks whether a mobile number is registered on different platforms such as Snapchat and Instagram — without alerting the target.",
      link: "https://github.com/megadose/ignorant",
      category: "phone",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 4,
      name: "NumLookup",
      desc: "A free online service that performs reverse phone lookups to identify the owner or details associated with a phone number.",
      link: "https://www.numlookup.com/",
      category: ["person", "phone"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 5,
      name: "PhoneIntel",
      desc: "An advanced open-source OSINT tool for deep phone-number intelligence, supporting analysis, batch processing, Google dorking, and spam-detection integrations.",
      link: "https://github.com/phoneintel",
      category: "phone",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 6,
      name: "Phunter",
      desc: "A phone-number intelligence tool capable of gathering operator information, possible locations, line type, spam reputation, and additional scraped data about a phone number.",
      link: "https://github.com/N0rz3/Phunter",
      category: "phone",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 7,
      name: "ScamSearch",
      desc: "A web-based tool used to search and analyze reports on scam phone numbers, identifying fraud, spam activity, and user complaints.",
      link: "https://scamsearch.io/",
      category: "phone",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 8,
      name: "ThisNumber",
      desc: "A reverse phone lookup directory that provides owner details, address history, and additional public data associated with a phone number.",
      link: "https://www.thisnumber.com/",
      category: ["person", "phone"], // Now an array
      price: "Open-Source",
      rating: 3
    },
    {
      id: 9,
      name: "Predicta Search",
      desc: "A digital footprints investigation tool that allows analysis of an email, phone number, username or full name to uncover linked accounts and online traces.",
      link: "https://www.predictasearch.com/",
      category: "person",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 10,
      name: "Sync Me",
      desc: "An app and web service that provides reverse phone-lookup, real-time caller ID, and spam/robocall blocking.",
      link: "https://sync.me/",
      category: "phone",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 11,
      name: "IDCrawl",
      desc: "Finds people's online profiles by name/email.",
      link: "https://www.idcrawl.com",
      category: "person",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 12,
      name: "Instant Username Search",
      desc: "Checks a username across many websites instantly.",
      link: "https://instantusername.com",
      category: "social",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 13,
      name: "NameCheckup",
      desc: "Checks username availability + linked profiles.",
      link: "https://www.namecheckup.com",
      category: "social",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 14,
      name: "ThatsThem",
      desc: "People lookup by name, email, phone, address.",
      link: "https://thatsthem.com",
      category: "person",
      price: "Freemium",
      rating: 4
    },
    {
      id: 15,
      name: "WhatsMyName",
      desc: "Searches a username on hundreds of sites.",
      link: "https://whatsmyname.app",
      category: "social",
      price: "Open-Source",
      rating: 1
    },
    {
      id: 16,
      name: "WhatsMyName (T)",
      desc: "Command-line version of WhatsMyName.",
      link: "https://github.com/WebBreacher/WhatsMyName",
      category: "social",
      price: "Freemium",
      rating: 5
    },
    {
      id: 17,
      name: "UserSearch.org",
      desc: "Finds accounts using username, name, email.",
      link: "https://usersearch.org",
      category: ["person", "social"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 18,
      name: "Namechk",
      desc: "Checks username on social media/platforms.",
      link: "https://namechk.com",
      category: "social",
      price: "Open-Source",
      rating: 5
    },
    {
      id: 19,
      name: "Sherlock (T)",
      desc: "Finds where a username exists using CLI.",
      link: "https://github.com/sherlock-project/sherlock",
      category: "social",
      price: "Freemium",
      rating: 3
    },
    {
      id: 20,
      name: "Sylva Identity Discovery (T)",
      desc: "Advanced identity discovery via CLI.",
      link: "https://github.com/sylvainpelissier/sylva",
      category: ["person", "social"], // Now an array
      price: "Freemium",
      rating: 4
    },
    {
      id: 21,
      name: "Names Directory",
      desc: "Searches people by name in a public directory.",
      link: "https://www.namesdir.com",
      category: "person",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 22,
      name: "Spokeo",
      desc: "Lookups contact info and addresses, Uncover caller identity and location, Search for social and dating profiles",
      link: "https://www.spokeo.com/",
      category: ["person", "phone", "social"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 23,
      name: "Epios",
      desc: "An OSINT search engine that allows you to perform an email or a phone reverse lookup, find related google reviews, and many other things.",
      link: "https://epieos.com/",
      category: ["infra", "phone"], // Now an array
      price: "Freemium",
      rating: 4
    },
    {
      id: 24,
      name: "Maigret",
      desc: "Username search tool made in Go",
      link: "https://github.com/krishpranav/maigret",
      category: "social",
      price: "Open-Source",
      rating: 5
    },
    {
      id: 25,
      name: "Pimeyes",
      desc: "Person identifier through Face Recognition and Reverse Image Search",
      link: "https://pimeyes.com/en",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 26,
      name: "TinEye",
      desc: "Search over 79.5 billion images and find where images appear online.",
      link: "https://tineye.com/",
      category: "image",
      price: "Premium",
      rating: 1
    },
    {
      id: 27,
      name: "Osint Rocks",
      desc: "Name, Email, Phone Number, Domain Lookup",
      link: "https://osint.rocks/",
      category: ["infra", "phone"], // Now an array
      price: "Freemium",
      rating: 3
    },
    {
      id: 28,
      name: "Black Book Online",
      desc: "U.S public record search tools like court records, property records, and criminal lookups.\nIt helps users find publicly available information by linking to official record databases.",
      link: "https://www.blackbookonline.info/",
      category: "person",
      price: "Freemium",
      rating: 3
    },
    {
      id: 29,
      name: "GHunt",
      desc: "Offensive Google Framework",
      link: "https://github.com/mxrch/GHunt",
      category: "infra",
      price: "Open-Source",
      rating: 1
    },
    {
      id: 30,
      name: "SignalHire",
      desc: "Finds email & phone linked to person/LinkedIn.",
      link: "https://www.signalhire.com",
      category: ["social", "phone"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 31,
      name: "PhoneInfoga",
      desc: "Phone number information lookup.",
      link: "https://github.com/sundowndev/phoneinfoga",
      category: "phone",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 32,
      name: "FauxID",
      desc: "Email, phone, username lookup",
      link: "https://fauxid.com/",
      category: "phone",
      price: "Freemium",
      rating: 1
    },
    {
      id: 33,
      name: "Facecheck ID",
      desc: "Also supports email reverse search",
      link: "https://facecheck.id/",
      category: ["infra"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 34,
      name: "Skymem",
      desc: "Email search engine for finding emails from domains",
      link: "https://www.skymem.info/",
      category: "infra",
      price: "Open-Source",
      rating: 1
    },
    {
      id: 35,
      name: "Infoga (T)",
      desc: "Email search engine for finding emails from domains",
      link: "https://github.com/m4ll0k/Infoga",
      category: "infra",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 36,
      name: "theHarvester (T)",
      desc: "Finds emails, names, and subdomains",
      link: "https://github.com/laramies/theHarvester",
      category: ["person", "infra"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 37,
      name: ". VoilaNorbert",
      desc: "Finds professional email addresses",
      link: "https://www.voilanorbert.com/",
      category: "infra",
      price: "Freemium",
      rating: 2
    },
    {
      id: 38,
      name: "Email to Address (R)",
      desc: "Searches email to find owner details",
      link: "https://emailtoaddress.com/",
      category: "infra",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 39,
      name: "Hunter.io",
      desc: "Finds company email patterns and verifies emails",
      link: "https://hunter.io/",
      category: "infra",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 40,
      name: "Email Permutator",
      desc: "Generates email variations",
      link: "https://email-permutator.com/",
      category: "infra",
      price: "Freemium",
      rating: 1
    },
    {
      id: 41,
      name: "Email Format",
      desc: "Shows company email formats",
      link: "https://www.email-format.com/",
      category: "infra",
      price: "Freemium",
      rating: 1
    },
    {
      id: 42,
      name: "MailboxValidator",
      desc: "Validates email existence",
      link: "https://mailboxvalidator.com/",
      category: "infra",
      price: "Open-Source",
      rating: 1
    },
    {
      id: 43,
      name: "Email Reputation",
      desc: "Checks email trust score",
      link: "https://emailrep.io/",
      category: "infra",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 44,
      name: "Read Notify",
      desc: "Email tracking tool",
      link: "https://www.readnotify.com/",
      category: "infra",
      price: "Freemium",
      rating: 4
    },
    {
      id: 45,
      name: "MailScrap",
      desc: "Scrapes email IDs from websites",
      link: "https://mailscrap.com/",
      category: "infra",
      price: "Freemium",
      rating: 4
    },
    {
      id: 46,
      name: "Reacher Demo",
      desc: "Email verification (demo)",
      link: "https://reacher.email/",
      category: "infra",
      price: "Open-Source",
      rating: 2
    },
    {
      id: 47,
      name: "Reacher GitHub (T)",
      desc: "Open-source email verifier",
      link: "https://github.com/reacherhq/reacher",
      category: "infra",
      price: "Freemium",
      rating: 3
    },
    {
      id: 48,
      name: "Ashley Madison Emails",
      desc: "Database of breached emails",
      link: "https://ashleymadisonleaks.com/",
      category: "infra",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 49,
      name: "Vigilante.pw",
      desc: "Breached email database",
      link: "https://vigilante.pw/",
      category: "infra",
      price: "Freemium",
      rating: 4
    },
    {
      id: 50,
      name: "DeHashed (R)",
      desc: "Email/phone/user breach search",
      link: "https://www.dehashed.com/",
      category: ["person", "phone"], // Now an array
      price: "Open-Source",
      rating: 3
    },
    {
      id: 51,
      name: "Hudson Rock",
      desc: "Checks malware-stolen credentials",
      link: "https://cavalier.hudsonrock.com/",
      category: "misc",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 52,
      name: "Have I Been Pwned",
      desc: "Checks email in breaches",
      link: "https://haveibeenpwned.com/",
      category: "infra",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 53,
      name: "ThatsThem",
      desc: "People search engine",
      link: "https://thatsthem.com/",
      category: "person",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 54,
      name: "GHunt (T)",
      desc: "Google account OSINT",
      link: "https://github.com/mxrch/GHunt",
      category: ["person", "infra"], // Now an array
      price: "Open-Source",
      rating: 3
    },
    {
      id: 55,
      name: "Sylva Identity Discovery (T)",
      desc: "Finds identity information",
      link: "https://sylva.io/",
      category: "person",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 56,
      name: "OSINT Industires",
      desc: "People username and email seach engine",
      link: "https://app.osint.industries/",
      category: "person",
      price: "Premium",
      rating: 3
    },
    {
      id: 57,
      name: "pipl",
      desc: "Deep people search",
      link: "https://pipl.com/",
      category: "person",
      price: "Premium",
      rating: 2
    },
    {
      id: 58,
      name: "Holeho",
      desc: "Checks if an email address is registered on 120+ websites by using password-reset endpoints without alerting the target. Helps find linked accounts and onlin",
      link: "https://github.com/megadose/holehe",
      category: ["social", "infra"], // Now an array
      price: "Freemium",
      rating: 4
    },
    {
      id: 59,
      name: "Phonebook.cz (Email mode)",
      desc: "Searches billions of scraped emails + domains + leaks.",
      link: "https://phonebook.cz/",
      category: ["misc", "infra"], // Now an array
      price: "Freemium",
      rating: 4
    },
    {
      id: 60,
      name: "LeakCheck",
      desc: "Less-known breach database showing password patterns + leaked accounts.",
      link: "https://leakcheck.io/",
      category: "email osint",
      price: "Freemium",
      rating: 3
    },
    {
      id: 61,
      name: "Blackbird",
      desc: "Finds usernames by fingerprints, profile images, bios, and patterns.",
      link: "https://github.com/p1ngul1n0/blackbird",
      category: "person",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 62,
      name: "Social Analyzer",
      desc: "Determines most likely profile from username across hundreds of websites.",
      link: "https://github.com/qeeqbox/social-analyzer",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 63,
      name: "WebMii",
      desc: "Finds documents, PDFs, public mentions, profiles by name.",
      link: "https://webmii.com/",
      category: "person osint",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 64,
      name: "PeekYou",
      desc: "Identifies hidden social profiles using face + username patterns.",
      link: "https://www.peekyou.com/",
      category: ["social", "person"], // Now an array
      price: "Open-Source",
      rating: 4
    },
    {
      id: 65,
      name: "Creepy (Geolocation OSINT)",
      desc: "Tracks geolocation metadata from social posts.",
      link: "https://github.com/jkakavas/creepy",
      category: ["image", "misc"], // Now an array
      price: "Open-Source",
      rating: 1
    },
    {
      id: 66,
      name: "ExifTool",
      desc: "Extracts hidden metadata from images (device, GPS, timestamp).",
      link: "https://exiftool.org/",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 67,
      name: "Any Mail Finder",
      desc: "Paid tool which find the email by name,domain ,company name",
      link: "https://anymailfinder.com/",
      category: "email /person",
      price: "Freemium",
      rating: 3
    },
    {
      id: 68,
      name: "Castrick",
      desc: "A tool where we can find by person email osint tool",
      link: "https://castrickclues.com/",
      category: "person/email/phone",
      price: "Open-Source",
      rating: 2
    },
    {
      id: 69,
      name: "AvatarApi",
      desc: "Looks up an email address and tries to return a profile image,",
      link: "https://avatarapi.com/",
      category: "email / person osint",
      price: "Open-Source",
      rating: 1
    },
    {
      id: 70,
      name: "CentralOps Email Dossier",
      desc: "Validates an email address: checks syntax, MX records",
      link: "https://centralops.net/co/emaildossier.aspx",
      category: "email osint / email validation",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 71,
      name: "Eyes",
      desc: "Checks out exisiting account from email",
      link: "https://github.com/N0rz3/Eyes",
      category: "email osint",
      price: "Open-Source",
      rating: 3
    },
    {
      id: 72,
      name: "OSINT",
      desc: "find the details which are provided by site (paid)",
      link: "https://osint.ly/",
      category: "osint all based tool",
      price: "Premium",
      rating: 4
    },
    {
      id: 73,
      name: "Minerva",
      desc: "Find account , usernam thins by email",
      link: "https://minervaosint.com/",
      category: "email osint",
      price: "Freemium",
      rating: 5
    },
    {
      id: 74,
      name: "Social Searcher",
      desc: "Allows you to monitor all public social mentions in social networks and the web.",
      link: "https://www.social-searcher.com/",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 75,
      name: "Lookup-ID.com",
      desc: "Helps you find the Facebook ID of anyone's profile or a Group.",
      link: "https://lookup-id.com/",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 76,
      name: "Who Posted What",
      desc: "A tool that allows a keyword search on Facebook on a specific date or within a specific time frame.",
      link: "https://whopostedwhat.com/",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 77,
      name: "Export Comments",
      desc: "Easily exports all comments from your social media posts to Excel file.",
      link: "https://exportcomments.com/",
      category: "misc",
      price: "Freemium",
      rating: 4
    },
    {
      id: 78,
      name: "Analyze ID",
      desc: "Find sites that supposedly may have the same owner. Including a FaceBook App ID match.",
      link: "https://analyzeid.com/",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 79,
      name: "Osintgram",
      desc: "OSINT tool on Instagram to collect, analyze, and run reconnaissance.",
      link: "https://github.com/Datalux/Osintgram",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 80,
      name: "Toutatis",
      desc: "It is a tool written to retrieve private information such as Phone Number, Mail Address, ID on Instagram accounts via API.",
      link: "https://pypi.org/project/toutatis/",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 81,
      name: "Exportgram",
      desc: "A web application made for people who want to export instagram comments into excel, csv and json formats.",
      link: "https://exportgram.net/",
      category: "instagram",
      price: "Freemium",
      rating: 4
    },
    {
      id: 82,
      name: "Instahunt",
      desc: "Easily find social media posts surrounding a location.",
      link: "https://instahunt.huntintel.io/",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 83,
      name: "RocketReach",
      desc: "Allows you to programmatically search and lookup contact info over 700 million professionals and 35 million companies.",
      link: "https://rocketreach.co/person?start=1&pageSize=10",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 84,
      name: "LinkedInt",
      desc: "A LinkedIn reconnaissance tool for gathering information about companies and individuals on the platform.",
      link: "https://github.com/vysecurity/LinkedInt",
      category: "social",
      price: "Freemium",
      rating: 4
    },
    {
      id: 85,
      name: "ScrapedIn",
      desc: "It performs a company specific search to extract a detailed list of employees who work for the target company",
      link: "https://github.com/dchrastil/ScrapedIn",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 86,
      name: "Phantom Buster",
      desc: "Automation tool suite that includes data extraction capabilities.",
      link: "https://phantombuster.com/phantombuster",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 87,
      name: "ReverseContact",
      desc: "Find Linked Profiles associated with any email.",
      link: "https://www.reversecontact.com/",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 88,
      name: "Free People Search Tool",
      desc: "Find people easily online.",
      link: "https://freepeoplesearchtool.com/#gsc.tab=0",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 89,
      name: "IntelTechniques",
      desc: "Provides you a interface with various tools for Linkedin Osint.",
      link: "https://inteltechniques.com/tools/Linkedin.html",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 90,
      name: "CrossLinked",
      desc: "LinkedIn enumeration tool to extract valid employee names from an organization through search engine scraping",
      link: "https://github.com/m8sec/CrossLinked",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 91,
      name: "FollowerWonk",
      desc: "Helps you find Twitter accounts using bio and provides many other useful features.",
      link: "https://followerwonk.com/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 92,
      name: "Twitter Advanced Search",
      desc: "Allows you to search on Twitter using filters for better search results.",
      link: "https://twitter.com/search-advanced",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 93,
      name: "Wayback Tweets",
      desc: "Retrieves archived tweets CDX data in HTML, CSV, and JSON formats.",
      link: "https://waybacktweets.streamlit.app/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 94,
      name: "memory.lol",
      desc: "a tiny web service that provides historical information about twitter users.",
      link: "https://memory.lol/app/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 95,
      name: "Tinfoleak",
      desc: "Search for Twitter users leaks.",
      link: "https://tinfoleak.com/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 96,
      name: "Facebook",
      desc: "Check accounts linked to email id or phone number",
      link: "https://www.facebook.com/login/identify?ctx=recover",
      category: "facebook",
      price: "Freemium",
      rating: 4
    },
    {
      id: 97,
      name: "DumpItBlue+",
      desc: "tool that helps to dump Facebook stuff for analysis or reporting purposes",
      link: "https://chromewebstore.google.com/detail/dumpitblue+/igmgknoioooacbcpcfgjigbaajpelbfe",
      category: "facebook",
      price: "Freemium",
      rating: 4
    },
    {
      id: 98,
      name: "Search is Back!",
      desc: "Find people and events on Facebook; Search by location, relationships, and more!",
      link: "https://searchisback.com/",
      category: "facebook",
      price: "Freemium",
      rating: 4
    },
    {
      id: 99,
      name: "IMGinn.io",
      desc: "Where users can view and download all the content on the social network Instagram.",
      link: "https://imginn.io/",
      category: "instagram",
      price: "Freemium",
      rating: 4
    },
    {
      id: 100,
      name: "instaloader",
      desc: "Download pictures (or videos) along with their captions and other metadata from Instagram.",
      link: "instaloader.github.io/",
      category: "instagram",
      price: "Freemium",
      rating: 4
    },
    {
      id: 101,
      name: "SoIG",
      desc: "Tool gets a range of information from an Instagram account that you normally wouldn't be able to get from just looking at their profile",
      link: "https://github.com/yezz123/SoIG",
      category: "instagram",
      price: "Freemium",
      rating: 4
    },
    {
      id: 102,
      name: "instalooter",
      desc: "API-less Instagram pictures and videos downloader",
      link: "https://pypi.org/project/instalooter/",
      category: "instagram",
      price: "Freemium",
      rating: 4
    },
    {
      id: 103,
      name: "Instagram Profile Analyzer",
      desc: "Analyze any public profile on Instagram—the tool is unlimited and secure. Enter a username or a profile link to get all account statistics",
      link: "https://inflact.com/tools/profile-analyzer/",
      category: "instagram",
      price: "Freemium",
      rating: 4
    },
    {
      id: 104,
      name: "Recruit'em",
      desc: "Easily use Google to search profiles on LinkedIn to find them across other social media",
      link: "https://recruitin.net/#",
      category: "linkedin",
      price: "Freemium",
      rating: 4
    },
    {
      id: 105,
      name: "SocialData",
      desc: "gives you convenient access to social media data without the need for scraping. Unoficial Twitter alternative",
      link: "https://socialdata.tools/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 106,
      name: "Deleted Tweet Finder V2.3",
      desc: "Search for deleted tweets across multiple archival services.",
      link: "https://cache.digitaldigging.org/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 107,
      name: "Twitonomy",
      desc: "Twitter #analytics and much more...",
      link: "https://www.twitonomy.com/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 108,
      name: "Birdhunt",
      desc: "Search about posts and accounts locationwise.",
      link: "https://birdhunt.huntintel.io/",
      category: "twitter",
      price: "Freemium",
      rating: 4
    },
    {
      id: 109,
      name: "Karma Decay",
      desc: "beta reverse image search for Reddit",
      link: "http://karmadecay.com/",
      category: "reddit",
      price: "Freemium",
      rating: 4
    },
    {
      id: 110,
      name: "Reddit User Analyser",
      desc: "Analyse a Reddit user",
      link: "https://reddit-user-analyser.netlify.app/",
      category: "reddit",
      price: "Freemium",
      rating: 4
    },
    {
      id: 111,
      name: "Redective",
      desc: "Analyze Reddit Users by just their name",
      link: "https://redective.com/",
      category: "reddit",
      price: "Freemium",
      rating: 4
    },
    {
      id: 112,
      name: "SnapIntel",
      desc: "Investigate Snapchat users with SnapIntel OSINT tool",
      link: "https://github.com/Kr0wZ/SnapIntel",
      category: "snapchat",
      price: "Freemium",
      rating: 4
    },
    {
      id: 113,
      name: "Telegram OSINT lib",
      desc: "demonstrates how to execute complex scenarios like draining all photos from channels, monitor users presence or register new account",
      link: "https://github.com/Postuf/telegram-osint-lib",
      category: "telegram",
      price: "Freemium",
      rating: 4
    },
    {
      id: 114,
      name: "Image-Research-OSINT Toolbox",
      desc: "Automates reverse image searches and helps with basic image investigations.",
      link: "https://github.com/The-Osint-Toolbox/Image-Research-OSINT",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 115,
      name: "Google Images / Lens",
      desc: "Reverse image search to find similar images and where the image appears online.",
      link: "https://images.google.com",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 116,
      name: "Bing Visual Search",
      desc: "Search by uploading an image to find related or similar visuals.",
      link: "https://bing.com/visualsearch",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 117,
      name: "Yandex Images",
      desc: "Strong reverse image search engine, especially good for faces and locations.",
      link: "https://yandex.com/images/?",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 118,
      name: "TinyEye",
      desc: "Tracks where an image appears online and finds older versions of the same picture.",
      link: "https://tineye.com",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 119,
      name: "DNSChecker Reverse Image Search",
      desc: "Sends one image to multiple search engines (Google, Bing, Yandex) at once.",
      link: "https://dnschecker.org/reverse-image-search.php",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 120,
      name: "Jimpl EXIF viewer",
      desc: "Shows EXIF like date, device, GPS; also lets you remove metadata.",
      link: "https://jimpl.com/",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 121,
      name: "EXIF.tools",
      desc: "Reads all hidden metadata (EXIF) from image files.",
      link: "https://exif.tools",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 122,
      name: "Metadata2Go",
      desc: "Extracts metadata from images, videos, audio and documents.",
      link: "https://www.metadata2go.com",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 123,
      name: "OnlineEXIFViewer",
      desc: "Reads EXIF locally in your browser without uploading the file.",
      link: "https://onlineexifviewer.com/",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 124,
      name: "ExifMeta",
      desc: "Displays detailed EXIF/IPTC/XMP metadata from photos and videos.",
      link: "https://exifmeta.com",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 125,
      name: "EXIFEditor",
      desc: "View, edit or remove EXIF metadata directly in the browser.",
      link: "https://exifeditor.io",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 126,
      name: "Ezgif Metadata Viewer",
      desc: "Shows metadata for images and videos up to large sizes.",
      link: "https://ezgif.com/view-metadata",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 127,
      name: "PixelPeeper EXIF Viewer",
      desc: "Shows camera, lens, and photo settings from image files.",
      link: "https://pixelpeeper.com/exif-data-viewer",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 128,
      name: "Google Maps + Street View",
      desc: "Maps, satellite and street-level images to verify locations.",
      link: "https://maps.google.com",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 129,
      name: "Google Earth Web",
      desc: "3D globe and satellite view to inspect terrain and buildings.",
      link: "https://earth.google.com/web",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 130,
      name: "OpenStreetMap",
      desc: "Crowdsourced map with detailed local roads and landmarks.",
      link: "https://www.openstreetmap.org",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 131,
      name: "SunCalc",
      desc: "Shows sun position and shadows to estimate time and direction in photos.",
      link: "https://www.suncalc.org",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 132,
      name: "Calcmaps",
      desc: "Measure distances, areas, and draw shapes on maps.",
      link: "https://www.calcmaps.com",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 133,
      name: "Mapillary",
      desc: "Crowdsourced street-level photos for location verification.",
      link: "https://www.mapillary.com",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 134,
      name: "Karta View",
      desc: "Street-level imagery similar to Street View, used with OpenStreetMap.",
      link: "https://kartaview.org",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 135,
      name: "Bhuvan (ISRO)",
      desc: "Indian satellite imagery and maps from ISRO.",
      link: "https://bhuvan.nrsc.gov.in",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 136,
      name: "Bharat Maps (NICMAPS / Bharatmaps)",
      desc: "Government of India multi-layer map with boundaries and geocoding.",
      link: "https://bharatmaps.gov.in",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 137,
      name: "Mappls / MapmyIndia + RealView",
      desc: "Indian map platform with high-detail maps and 360° street images.",
      link: "https://www.mappls.com, https://mapmyindia.com/realview/",
      category: "geolocation",
      price: "Freemium",
      rating: 4
    },
    {
      id: 138,
      name: "GeoSpy",
      desc: "AI tool to guess image location",
      link: "https://www.mapillary.com/",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 139,
      name: "LOC AI",
      desc: "Finds location from image using AI",
      link: "https://loc.ai/",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 140,
      name: "PimEyes",
      desc: "Reverse face search engine",
      link: "https://pimeyes.com/",
      category: "image",
      price: "Premium",
      rating: 3
    },
    {
      id: 141,
      name: "Face check ID",
      desc: "Reverse face lookup",
      link: "https://facecheck.id/",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 142,
      name: "Betaface",
      desc: "Facial comparison & recognition",
      link: "https://www.betafaceapi.com/demo.html",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 143,
      name: "Social Analyzer",
      desc: "Image & username search across platforms.",
      link: "https://github.com/qeeqbox/social-analyzer",
      category: "image",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 144,
      name: "ImgOps",
      desc: "One-click reverse search/meta inspector toolkit.",
      link: "https://imgops.com",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 145,
      name: "PimEyes (free limited)",
      desc: "Face recognition search across the internet.",
      link: "https://pimeyes.com",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 146,
      name: "ExifTool",
      desc: "Most powerful EXIF extractor (CLI).",
      link: "https://exiftool.org",
      category: "metadata",
      price: "Open-Source",
      rating: 4
    },
    {
      id: 147,
      name: "Jeffrey’s EXIF Viewer",
      desc: "Quick online EXIF viewer for images.",
      link: "https://exif.regex.info",
      category: "metadata",
      price: "Freemium",
      rating: 4
    },
    {
      id: 148,
      name: "FotoForensics",
      desc: "Check ELA (photo manipulation detection).",
      link: "https://fotoforensics.com",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 149,
      name: "Forensically",
      desc: "Clone tool, noise analysis, ELA.",
      link: "https://29a.ch/photo-forensics/",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
      id: 150,
      name: "Remove.bg (OSINT usage)",
      desc: "Good for isolating subjects in images.",
      link: "https://remove.bg",
      category: "image",
      price: "Freemium",
      rating: 4
    },
    {
    id: 151,
    name: "HashMyFiles",
    desc: "Quick file hash calculation (SHA, MD5).",
    link: "https://www.nirsoft.net/utils/hash_my_files.html",
    category: "metadata",
    price: "Freemium",
    rating: 4
  },
  {
    id: 152,
    name: "Get-Metadata",
    desc: "Extracts metadata from files/images.",
    link: "https://www.get-metadata.com",
    category: "metadata",
    price: "Freemium",
    rating: 4
  },
  {
    id: 153,
    name: "Metapicz",
    desc: "View EXIF & metadata from images.",
    link: "https://metapicz.com",
    category: "metadata",
    price: "Freemium",
    rating: 4
  },
  {
    id: 154,
    name: "FileSignature",
    desc: "Identifies file type + header signature.",
    link: "https://filesignatures.net",
    category: "metadata",
    price: "Freemium",
    rating: 4
  },
  {
    id: 155,
    name: "Foca",
    desc: "Metadata extraction from documents/files.",
    link: "https://github.com/ElevenPaths/FOCA",
    category: "metadata",
    price: "Freemium",
    rating: 4
  },
  {
    id: 156,
    name: "Strings(Sysinternals)",
    desc: "Extract ASCII/Unicode text from images/files.",
    link: "https://learn.microsoft.com/sysinternals/downloads/strings",
    category: "metadata",
    price: "Freemium",
    rating: 4
  },
  {
    id: 157,
    name: "GeoGuessr (OSINT use)",
    desc: "Location inference practice.",
    link: "https://www.geoguessr.com",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 158,
    name: "PeakVisor",
    desc: "Mountain/peak recognition from images.",
    link: "https://peakvisor.com",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 159,
    name: "What3Words",
    desc: "Pinpoint exact 3m×3m location.",
    link: "https://what3words.com",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 160,
    name: "MapmyIndia",
    desc: "Detailed India-focused maps with routing, traffic, address search and RealView street-level imagery.",
    link: "https://www.mapmyindia.com",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 161,
    name: "Wikimapia",
    desc: "Crowdsourced map + points of interest.",
    link: "https://wikimapia.org",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 162,
    name: "Sentinel Hub EO Browser",
    desc: "Satellite imagery (ESA Copernicus).",
    link: "https://apps.sentinel-hub.com/eo-browser",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 163,
    name: "FlashEarth",
    desc: "Satellite imagery from multiple sources.",
    link: "http://flashearth.com",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 164,
    name: "WeatherSpark",
    desc: "Historic weather → verifying time/place.",
    link: "https://weatherspark.com",
    category: "geolocation",
    price: "Freemium",
    rating: 4
  },
  {
    id: 165,
    name: "SpiderFoot",
    desc: "OSINT automation tool with 200+ modules.",
    link: "https://github.com/smicallef/spiderfoot",
    category: "osint",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 166,
    name: "SubFinder",
    desc: "Passive subdomain discovery tool.",
    link: "https://github.com/projectdiscovery/subfinder",
    category: "osint",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 167,
    name: "OSINT.sh",
    desc: "All in one Information Gathering Tools",
    link: "https://osint.sh/",
    category: "osint",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 168,
    name: "Intelligence X",
    desc: "Search engine and data archive",
    link: "https://intelx.io/",
    category: "osint",
    price: "Premium",
    rating: 2
  },
  {
    id: 169,
    name: "Whois",
    desc: "Trace ownership and tenure of a domain name",
    link: "https://www.whois.com/whois/",
    category: "website-ip",
    price: "Open-Source",
    rating: 5
  },
  {
    id: 170,
    name: "Criminal IP",
    desc: "CTI search engine scanning IP open ports",
    link: "https://www.criminalip.io/",
    category: "ip-intel",
    price: "Premium",
    rating: 4
  },
  {
    id: 171,
    name: "IP Fingerprints",
    desc: "IP geolocation and network details",
    link: "https://ipfingerprints.com/geolocation",
    category: "ip-intel",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 172,
    name: "Marine Traffic",
    desc: "Location info of ships",
    link: "https://www.marinetraffic.com/",
    category: "transport",
    price: "Freemium",
    rating: 4
  },
  {
    id: 173,
    name: "Flight Radar",
    desc: "Global flight tracking service",
    link: "https://www.flightradar24.com/",
    category: "transport",
    price: "Freemium",
    rating: 4
  },
  {
    id: 174,
    name: "URLVoid",
    desc: "Checks malicious/suspicious URLs",
    link: "https://www.urlvoid.com",
    category: "website/domain",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 175,
    name: "MXToolbox",
    desc: "Lookup DNS, MX, SPF, blacklist, etc.",
    link: "https://mxtoolbox.com",
    category: "website/domain",
    price: "Freemium",
    rating: 5
  },
  {
    id: 176,
    name: "DNSChecker",
    desc: "DNS record lookup",
    link: "https://dnschecker.org",
    category: "website/domain",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 177,
    name: "Kitterman SPF Lookup",
    desc: "SPF record checker",
    link: "https://www.kitterman.com",
    category: "website/domain",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 178,
    name: "Shodan",
    desc: "Search exposed devices and services.",
    link: "https://www.shodan.io",
    category: "website/domain",
    price: "Freemium",
    rating: 5
  },
  {
    id: 179,
    name: "WhatIsMyIPAddress",
    desc: "Check IP geolocation + blacklist",
    link: "https://whatismyipaddress.com",
    category: "website/domain",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 180,
    name: "Wappalyzer",
    desc: "Detect website technologies.",
    link: "https://www.wappalyzer.com",
    category: "website/domain",
    price: "Freemium",
    rating: 4
  },
  {
    id: 181,
    name: "BuiltWith",
    desc: "Detect CMS and frameworks.",
    link: "https://builtwith.com",
    category: "website/domain",
    price: "Freemium",
    rating: 4
  },
  {
    id: 182,
    name: "VirusTotal",
    desc: "Scan URLs and files.",
    link: "https://www.virustotal.com",
    category: "website/domain",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 183,
    name: "Metadefender",
    desc: "Malware & URL scanning.",
    link: "https://metadefender.com/",
    category: "website/domain",
    price: "Open-Source",
    rating: 2
  },
  {
    id: 184,
    name: "Maltego",
    desc: "Visual link analysis.",
    link: "https://www.maltego.com",
    category: "misc",
    price: "Freemium",
    rating: 4
  },
  {
    id: 185,
    name: "Assetfinder",
    desc: "Subdomain finder.",
    link: "https://github.com/tomnomnom/assetfinder",
    category: "subdomain",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 186,
    name: "Amass",
    desc: "Subdomain & network mapping.",
    link: "https://github.com/owasp-amass/amass",
    category: "subdomain",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 187,
    name: "Breacher",
    desc: "Finds admin panels of websites.",
    link: "https://github.com/UltimateHackers/Breacher",
    category: "website/domain",
    price: "Open-Source",
    rating: 2
  },
    {
    id: 188,
    name: "ProtonMail",
    desc: "Disposable email for OSINT.",
    link: "https://protonmail.com",
    category: "misc",
    price: "Freemium",
    rating: 4
  },
  {
    id: 189,
    name: "Tor Browser",
    desc: "Browse .onion and dark web.",
    link: "https://www.torproject.org",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 190,
    name: "Epios",
    desc: "Email lookup and metadata check",
    link: "https://epieos.com/",
    category: "misc",
    price: "Freemium",
    rating: 4
  },
  {
    id: 191,
    name: "AbuseIPDB",
    desc: "Check if an IP is malicious",
    link: "https://www.abuseipdb.com/",
    category: "ip reputation",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 192,
    name: "Cisco Talos Intelligence",
    desc: "Threat reputation for domains/IPs",
    link: "https://talosintelligence.com/",
    category: "threat intelligence",
    price: "Open-Source",
    rating: 2
  },
  {
    id: 193,
    name: "DarkNet Market Stats",
    desc: "Monitors dark web markets",
    link: "https://darknetmarketstats.com/",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 194,
    name: "ZaubaCorp",
    desc: "Gives company information, directors, filings",
    link: "https://www.zaubacorp.com/",
    category: "corporate osint",
    price: "Freemium",
    rating: 4
  },
  {
    id: 195,
    name: "IP2Proxy",
    desc: "Checks if an IP is proxy/VPN",
    link: "https://www.ip2proxy.com",
    category: "opsec",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 196,
    name: "ProxyChecker",
    desc: "Checks proxy anonymity",
    link: "https://proxychecker.co",
    category: "opsec",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 197,
    name: "I2P Anonymous Network",
    desc: "Anonymous communication network",
    link: "https://geti2p.net",
    category: "opsec",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 198,
    name: "Freenet Project",
    desc: "Anonymous file-sharing",
    link: "https://freenetproject.org",
    category: "opsec",
    price: "Open-Source",
    rating: 5
  },
  {
    id: 199,
    name: "Tor Download",
    desc: "Tor Browser for anonymity",
    link: "https://www.torproject.org",
    category: "opsec",
    price: "Freemium",
    rating: 5
  },
  {
    id: 200,
    name: "VPN Comparisons (TOPS)",
    desc: "Compares privacy-focused VPNs",
    link: "https://thatoneprivacysite.net",
    category: "opsec",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 201,
    name: "User Agent Decoder",
    desc: "Decodes browser UA strings",
    link: "https://useragentstring.com",
    category: "browser info",
    price: "Open-Source",
    rating: 2
  },
  {
    id: 202,
    name: "WhatIsMyBrowser",
    desc: "Shows browser info",
    link: "https://www.whatismybrowser.com",
    category: "browser info",
    price: "Open-Source",
    rating: 2
  },
  {
    id: 203,
    name: "Trace My IP",
    desc: "Tracks IP/Browser footprints",
    link: "https://www.tracemyip.org",
    category: "opsec",
    price: "Open-Source",
    rating: 2
  },
  {
    id: 204,
    name: "WebRTC Leak Test",
    desc: "Check for WebRTC leaks",
    link: "https://browserleaks.com/webrtc",
    category: "opsec",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 205,
    name: "Perfect Privacy Tools",
    desc: "Privacy test suite",
    link: "https://perfect-privacy.com",
    category: "opsec",
    price: "Premium",
    rating: 1
  },
  {
    id: 206,
    name: "Email Leak Tests",
    desc: "Check whether email leaks via browser",
    link: "https://browserleaks.com/email",
    category: "opsec",
    price: "Freemium",
    rating: 1
  },
  {
    id: 207,
    name: "IPv6 Leak Test",
    desc: "Checks IPv6 leak",
    link: "https://ipleak.net",
    category: "opsec",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 208,
    name: "TorGuard",
    desc: "VPN & proxy",
    link: "https://torguard.net",
    category: "opsec",
    price: "Premium",
    rating: 2
  },
  {
    id: 209,
    name: "DNS Leak Test",
    desc: "Checks DNS leak",
    link: "https://dnsleaktest.com",
    category: "opsec",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 210,
    name: "JonDonym",
    desc: "Anonymity service",
    link: "https://www.jondos.de",
    category: "opsec",
    price: "Premium",
    rating: 1
  },
  {
    id: 211,
    name: "IP/DNS Leak Detection",
    desc: "General leak detection",
    link: "https://browserleaks.com",
    category: "opsec",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 212,
    name: "Browserscope",
    desc: "Browser capability test",
    link: "http://www.browserscope.org",
    category: "browser info",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 213,
    name: "NoScript",
    desc: "Blocks scripts in browser",
    link: "https://noscript.net",
    category: "opsec",
    price: "Freemium",
    rating: 5
  },
  {
    id: 214,
    name: "BrowserLeaks",
    desc: "Detailed browser fingerprinting",
    link: "https://browserleaks.com",
    category: "opsec",
    price: "Open-Source",
    rating: 5
  },
  {
    id: 215,
    name: "Firefox-debloat",
    desc: "Privacy settings for Firefox",
    link: "https://github.com/arkenfox/user.js",
    category: "opsec",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 216,
    name: "LocaBrowser",
    desc: "Geolocation testing",
    link: "https://www.locabrowser.com",
    category: "browser/geo",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 217,
    name: "RandomUser Generator",
    desc: "Fake identity generator",
    link: "https://randomuser.me",
    category: "opsec",
    price: "Freemium",
    rating: 4
  },
  {
    id: 218,
    name: "Fake Name Generator",
    desc: "Fake profile generator",
    link: "https://www.fakenamegenerator.com",
    category: "opsec",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 219,
    name: "Faker.js",
    desc: "Fake data generator",
    link: "https://fakerjs.dev",
    category: "dev/opsec",
    price: "Freemium",
    rating: 5
  },
  {
    id: 220,
    name: "Social Media Fingerprint",
    desc: "Check data exposure",
    link: "https://socialmediafingerprint.com",
    category: "opsec",
    price: "Freemium",
    rating: 4
  },
  {
    id: 221,
    name: "JustDeleteMe",
    desc: "Delete online accounts",
    link: "https://justdeleteme.xyz",
    category: "opsec",
    price: "Freemium",
    rating: 5
  },
  {
    id: 222,
    name: "PrivacyTools",
    desc: "Privacy resources",
    link: "https://privacytools.io",
    category: "opsec",
    price: "Premium",
    rating: 2
  },
  {
    id: 223,
    name: "Privacy Guides",
    desc: "Privacy guide",
    link: "https://privacyguides.org",
    category: "opsec",
    price: "Open-Source",
    rating: 2
  },
  {
    id: 224,
    name: "Hiding from the Internet",
    desc: "Privacy methods",
    link: "https://inteltechniques.com/book2.html",
    category: "opsec",
    price: "Premium",
    rating: 4
  },
  {
    id: 225,
    name: "Internet Privacy Handbook",
    desc: "Online safety guide",
    link: "https://github.com/privacytools/privacytools.io",
    category: "opsec",
    price: "Open-Source",
    rating: 1
  },
  {
    id: 226,
    name: "Self-Destructing Cookies",
    desc: "Auto-delete cookies",
    link: "https://addons.mozilla.org/addon/self-destructing-cookies",
    category: "opsec",
    price: "Open-Source",
    rating: 1
  },
  {
    id: 227,
    name: "Bitcoin Who’s Who",
    desc: "Check BTC wallet reputation",
    link: "https://bitcoinwhoswho.com",
    category: "crypto",
    price: "Open-Source",
    rating: 2
  },
  {
    id: 228,
    name: "Blockonomics",
    desc: "BTC payment explorer",
    link: "https://www.blockonomics.co",
    category: "crypto",
    price: "Freemium",
    rating: 4
  },
  {
    id: 229,
    name: "GraphSense",
    desc: "Blockchain analytics",
    link: "https://graphsense.info",
    category: "crypto osint",
    price: "Freemium",
    rating: 1
  },
  {
    id: 230,
    name: "WalletExplorer",
    desc: "BTC wallet clustering",
    link: "https://www.walletexplorer.com",
    category: "crypto osint",
    price: "Open-Source",
    rating: 1
  },
  {
    id: 231,
    name: "BitRef",
    desc: "Check BTC address balance",
    link: "https://bitref.com",
    category: "crypto",
    price: "Freemium",
    rating: 5
  },
  {
    id: 232,
    name: "Blockchain.info",
    desc: "BTC explorer",
    link: "https://www.blockchain.com/explorer",
    category: "crypto",
    price: "Freemium",
    rating: 5
  },
  {
    id: 233,
    name: "Blockr.io",
    desc: "Blockchain explorer",
    link: "https://blockr.io",
    category: "crypto",
    price: "Freemium",
    rating: 1
  },
  {
    id: 234,
    name: "Blocktrail",
    desc: "BTC explorer",
    link: "https://www.blocktrail.com",
    category: "crypto",
    price: "Freemium",
    rating: 1
  },
  {
    id: 235,
    name: "OXT",
    desc: "BTC analytics",
    link: "https://oxt.me",
    category: "crypto osint",
    price: "Freemium",
    rating: 1
  },
  {
    id: 236,
    name: "Etherscan",
    desc: "Ethereum explorer",
    link: "https://etherscan.io",
    category: "crypto",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 237,
    name: "Etherchain",
    desc: "ETH explorer",
    link: "https://etherchain.org",
    category: "crypto",
    price: "Freemium",
    rating: 4
  },
  {
    id: 238,
    name: "Ether.camp",
    desc: "Ethereum explorer",
    link: "https://live.ether.camp",
    category: "crypto",
    price: "Freemium",
    rating: 1
  },
  {
    id: 239,
    name: "WebOProxy",
    desc: "Crypto/Proxy OSINT",
    link: "https://weboproxy.com",
    category: "crypto/web",
    price: "Open-Source",
    rating: 1
  },
  {
    id: 240,
    name: "IACA Dark Web Investigation",
    desc: "Training resource",
    link: "https://iaca-darkweb-training.org",
    category: "threat",
    price: "Freemium",
    rating: 1
  },
  {
    id: 241,
    name: "ChainRadar",
    desc: "Crypto tracking",
    link: "https://chainradar.com",
    category: "threat",
    price: "Freemium",
    rating: 4
  },
  {
    id: 242,
    name: "Monero Blocks",
    desc: "Monero blockchain explorer",
    link: "https://moneroblocks.info",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 243,
    name: "XMRChain",
    desc: "Monero transaction explorer",
    link: "https://xmrchain.net",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 244,
    name: "Core.onion",
    desc: "Hidden Monero explorer",
    link: "(Onion link)",
    category: "threat",
    price: "Freemium",
    rating: 4
  },
  {
    id: 245,
    name: "Hidden Wiki",
    desc: "Dark web directory",
    link: "http://zqktlwiuavvvqqt4ybvgvi7tyo4hjl5xz…onion",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 246,
    name: "Ahmia",
    desc: "Tor search engine",
    link: "https://ahmia.fi",
    category: "threat",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 247,
    name: "dark.fail",
    desc: "Active onion links",
    link: "https://dark.fail",
    category: "threat",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 248,
    name: "Tor66",
    desc: "Tor search",
    link: "http://tor66sewebgmkqd…onion",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 249,
    name: "Not Evil",
    desc: "Tor search engine",
    link: "http://hss3uro2hsxfogfq.onion",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 250,
    name: "Candle",
    desc: "Tor search",
    link: "http://gjobqjj7wyczbqie.onion",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
    {
    id: 251,
    name: "OnionLink",
    desc: "Onion directories",
    link: "https://onionlink.info",
    category: "threat",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 252,
    name: "Onion Cab",
    desc: "Onion link directory",
    link: "https://onion.cab",
    category: "threat",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 253,
    name: "Onion Investigator",
    desc: "Scans onion sites",
    link: "https://github.com/uds-psl/onion-investigator",
    category: "threat",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 254,
    name: "docker-onion-nmap",
    desc: "Scan onion sites",
    link: "https://github.com/ahmetb/onion-nmap",
    category: "threat",
    price: "Open-Source",
    rating: 4
  },
  {
    id: 255,
    name: "Onioff",
    desc: "Onion extractor",
    link: "https://github.com/k4m4/onioff",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 256,
    name: "OnionScan",
    desc: "Dark web security analysis",
    link: "https://github.com/s-rah/onionscan",
    category: "threat",
    price: "Open-Source",
    rating: 1
  },
  {
    id: 257,
    name: "TorBot",
    desc: "Dark web crawler",
    link: "https://github.com/DedSecInside/TorBot",
    category: "threat",
    price: "Open-Source",
    rating: 1
  },
  {
    id: 258,
    name: "Tor Scan",
    desc: "Onion domain scanner",
    link: "https://github.com/lanrat/onioncrawl",
    category: "threat",
    price: "Freemium",
    rating: 4
  },
  {
    id: 259,
    name: "Reddit Darknet",
    desc: "DW discussions",
    link: "https://reddit.com/r/darknet",
    category: "threat",
    price: "Freemium",
    rating: 4
  },
  {
    id: 260,
    name: "Reddit Onions",
    desc: "Onion links",
    link: "https://reddit.com/r/onions",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 261,
    name: "Reddit Deep Web",
    desc: "Discussions",
    link: "https://reddit.com/r/deepweb",
    category: "threat",
    price: "Open-Source",
    rating: 3
  },
  {
    id: 262,
    name: "Archive.org Advanced Search",
    desc: "Finds past profiles, deleted pages, old data.",
    link: "https://archive.org/advancedsearch.php",
    category: "historic osint",
    price: "Freemium",
    rating: 4
  }
  ];
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    tools.forEach(tool => {
      
      // Ensure tool.category is treated as an array even if it's a single string
      const categories = Array.isArray(tool.category) ? tool.category : [tool.category];
      
      // Log categories and tool for debugging
      console.log('Categories:', categories);
      console.log('Tool:', tool);
  
      // Loop through each category assigned to the tool
      categories.forEach(cat => {
        
        // Find the section matching the current category
        const section = document.querySelector(
          `.tool-category[data-category="${cat}"] .tool-cards-container`
        );
  
        if (!section) {
          console.log(`No section found for category: ${cat}`);
          return; // Skip if the category section isn't found
        }
  
        // Append the tool card
        section.innerHTML += `
          <a href="${tool.link}" class="tool-card">
            <div class="tool-header">
              <span class="tool-title">${tool.name}</span>
              <span class="tool-tag ${tool.price}">
                ${tool.price.toUpperCase()}
              </span>
            </div>
            <p class="tool-description">${tool.desc}</p>
            <div class="tool-rating">
              ${renderStars(tool.rating)}
              <span class="rating-value">(${tool.rating}.0)</span>
            </div>
          </a>
        `;
      });
    });
  });
  
  function renderStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `<span class="${i <= rating ? "star-filled" : "star-empty"}">★</span>`;
    }
    return stars;
  }
  
  