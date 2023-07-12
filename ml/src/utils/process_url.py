from urllib.parse import urlparse
import pandas as pd

columns = [
 'domainUrlRatio',
 'tld',
 'domainlength',
 'SymbolCount_URL',
 'pathDomainRatio',
 'isPortEighty',
 'domain_token_count',
 'pathurlRatio',
 'Query_LetterCount',
 'subDirLen'
]
def get_url_features(urls):
    tld_mapping = {
        2: "com",
        3: "net",
        4: "org",
        5: "edu",
        6: "gov",
        7: "mil",
        8: "int",
        9: "xyz",
        10: "info",
        11: "biz",
        12: "io",
        13: "co",
        14: "uk",
        15: "ca",
        16: "de",
        17: "au",
        18: "fr",
        19: "jp"
    }

    url_features = []
    for url in urls:
        parsed_url = urlparse(url)

        domain_url_ratio = len(parsed_url.netloc) / len(url)
        tld = parsed_url.netloc.split('.')[-1]
        tld_number = next((key for key, value in tld_mapping.items() if value == tld), 0)
        domain_length = len(parsed_url.netloc)
        symbol_count = sum(c in "!@#$%^&*()_+{}:\"<>?|'\\/~`=://.:/?=,;()[]" for c in url)
        path_domain_ratio = len(parsed_url.path) / len(parsed_url.netloc)
        is_port_eighty = 0 if parsed_url.port == 80 else -1
        domain_token_count = len(parsed_url.netloc.split('.'))
        path_url_ratio = len(parsed_url.path) / len(url)

        query = parsed_url.query
        query_letter_count = -1 if not query else sum(c.isalpha() for c in query)

        sub_dir_length = len(parsed_url.path.split('/'))

        url_features.append({
            'domainUrlRatio': domain_url_ratio,
            'tld': tld_number,
            'domainlength': domain_length,
            'SymbolCount_URL': symbol_count,
            'pathDomainRatio': path_domain_ratio,
            'isPortEighty': is_port_eighty,
            'domain_token_count': domain_token_count,
            'pathurlRatio': path_url_ratio,
            'Query_LetterCount': query_letter_count,
            'subDirLen': sub_dir_length
        })

    return pd.DataFrame(url_features)


