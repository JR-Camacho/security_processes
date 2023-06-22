import arff
import pandas as pd

def load_kdd_dataset(data_path):
    with open(data_path, 'r') as train_set:
        dataset = arff.load(train_set)
    attributes = [attr[0] for attr in list(dataset["attributes"])]
    return pd.DataFrame(dataset["data"], columns=attributes)