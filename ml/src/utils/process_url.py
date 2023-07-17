from urllib.parse import urlparse
import pandas as pd
import os

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

def calculate_character_continuity_rate(url):
    domain = urlparse(url).netloc

    character_types = {
        'letter': 0,
        'digit': 0,
        'symbol': 0
    }

    current_type = None
    current_length = 0
    max_length = 0

    for char in domain:
        if char.isalpha():
            if current_type != 'letter':
                current_type = 'letter'
                current_length = 1
            else:
                current_length += 1
        elif char.isdigit():
            if current_type != 'digit':
                current_type = 'digit'
                current_length = 1
            else:
                current_length += 1
        else:
            if current_type != 'symbol':
                current_type = 'symbol'
                current_length = 1
            else:
                current_length += 1

        if current_length > max_length:
            max_length = current_length

        character_types[current_type] = max(character_types[current_type], current_length)

    total_length = sum(character_types.values())

    return max_length / total_length if total_length != 0 else 0.0


def get_url_phishing_features(urls):
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
        url_letter_count = sum(c.isalpha() for c in url)
        url_len = len(url)
        path_length = len(parsed_url.path)
        arg_domain_ratio = len(parsed_url.query) / len(parsed_url.netloc)

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
            'URL_Letter_Count': url_letter_count,
            'urlLen': url_len,
            'pathLength': path_length,
            'argDomanRatio': arg_domain_ratio,
        })

    return pd.DataFrame(url_features)

def get_url_malware_features(urls):
    url_features = []
    for url in urls:
        parsed_url = urlparse(url)

        # NumberRate_AfterPath calculation
        after_path = parsed_url.path.split('/')[-1]  # Get the part after the path
        number_rate_after_path = sum(c.isdigit() for c in after_path) / len(after_path) if after_path else -1.0

        is_port_eighty = 0 if parsed_url.port == 80 else -1
        domain_length = len(parsed_url.netloc)
        symbol_count = sum(c in "!@#$%^&*()_+{}:\"<>?|'\\/~`=://.:/?=,;()[]" for c in url)
        domain_token_count = len(parsed_url.netloc.split('.'))
        tld = parsed_url.netloc.split('.')[-1]
        tld_number = next((key for key, value in tld_mapping.items() if value == tld), 0)
        arg_domain_ratio = len(parsed_url.query) / len(parsed_url.netloc)
        is_ip_address_in_domain_name = -1 if not int(parsed_url.netloc.replace('.', '').isdigit()) else 0
        url_len = len(url)
        longest_path_token_length = max(len(token) for token in parsed_url.path.split('/'))
        url_letter_count = sum(c.isalpha() for c in url)
        avg_domain_token_length = sum(len(token) for token in parsed_url.netloc.split('.')) / domain_token_count
        path_domain_ratio = len(parsed_url.path) / len(parsed_url.netloc)

        url_features.append({
            'NumberRate_AfterPath': number_rate_after_path,
            'isPortEighty': is_port_eighty,
            'domainlength': domain_length,
            'SymbolCount_URL': symbol_count,
            'domain_token_count': domain_token_count,
            'tld': tld_number,
            'argDomanRatio': arg_domain_ratio,
            'ISIpAddressInDomainName': is_ip_address_in_domain_name,
            'urlLen': url_len,
            'LongestPathTokenLength': longest_path_token_length,
            'URL_Letter_Count': url_letter_count,
            'avgdomaintokenlen': avg_domain_token_length,
            'pathDomainRatio': path_domain_ratio,
        })

    return pd.DataFrame(url_features)

def get_url_spam_features(urls):
    url_features = []
    for url in urls:
        parsed_url = urlparse(url)

        tld = parsed_url.netloc.split('.')[-1]
        tld_number = next((key for key, value in tld_mapping.items() if value == tld), 0)
        symbol_count_domain = sum(c in parsed_url.netloc for c in "!@#$%^&*()_+-{}.:\"<>?|'\\/~`=[]")
        num_dots_in_url = parsed_url.geturl().count('.')
        domain_token_count = len(parsed_url.netloc.split('.'))
        symbol_count_url = sum(c in "!@#$%^&*()_+-{}:\"<>?|'\\/~`=://.:/?=,;()[]" for c in url)
        arg_url_ratio = len(parsed_url.query) / len(url) if len(url) > 0 else 0
        arg_path_ratio = len(parsed_url.query) / len(parsed_url.path) if len(parsed_url.path) > 0 else 0
        symbol_count_filename = sum(c in "!@#$%^&*()_-+{}.:\"<>?|'\\/~`" for c in os.path.basename(parsed_url.path)) if os.path.basename(parsed_url.path) else -1
        symbol_count_extension = sum(c in "!@#$%^&*()_-+{}.:\"<>?|'\\/~`" for c in os.path.splitext(parsed_url.path)[1]) if os.path.splitext(parsed_url.path)[1] else -1
        digit_count_extension = sum(c.isdigit() for c in os.path.splitext(parsed_url.path)[-2]) if os.path.splitext(parsed_url.path)[-1] else -1
        symbol_count_after_path = sum(c in "!@#$%^&*()_-+{}.:\"<>?|'\\/~`" for c in (parsed_url.query + parsed_url.fragment)) if (parsed_url.query + parsed_url.fragment) else -1
        domain_length = len(parsed_url.netloc)

        url_features.append({
            'tld': tld_number,
            'SymbolCount_Domain': symbol_count_domain,
            'NumberofDotsinURL': num_dots_in_url,
            'domain_token_count': domain_token_count,
            'CharacterContinuityRate': calculate_character_continuity_rate(url),
            'SymbolCount_URL': symbol_count_url,
            'ArgUrlRatio': arg_url_ratio,
            'argPathRatio': arg_path_ratio,
            'SymbolCount_FileName': symbol_count_filename,
            'SymbolCount_Extension': symbol_count_extension,
            'Extension_DigitCount': digit_count_extension,
            'SymbolCount_Afterpath': symbol_count_after_path,
            'domainlength': domain_length,
        })

    return pd.DataFrame(url_features)
