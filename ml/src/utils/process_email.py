import os
from src.utils.parser_email import Parser

def parse_index(dataset_path, path_to_index, n_elements):
    ret_indexes = []
    index = open(path_to_index).readlines()
    for i in range(n_elements):
        mail = index[i].split(" ../")
        label = mail[0]
        path = mail[1][:-1]
        ret_indexes.append({"label": label, "email_path": os.path.join(dataset_path, path)})
    return ret_indexes

def parse_email(index):
    p = Parser()
    pmail = p.parse(index["email_path"])
    return pmail, index["label"]

def create_prep_dataset(dataset_path ,index_path, n_elements):
    X = []
    y = []
    indexes = parse_index(dataset_path, index_path, n_elements)
    for i in range(n_elements):
        print("\rParsing email: {0}".format(i + 1), end='')
        mail, label = parse_email(indexes[i])
        X.append(" ".join(mail['subject']) + " ".join(mail['body']))
        y.append(label)
    return X, y