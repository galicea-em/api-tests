#!/usr/bin/python3
# coding: utf-8

import requests
import json
from pprint import pprint

token_url = 'http://127.0.0.1:5000/oauth/token'

config={}
config["client_id"]='9a195ac5-1a34-4bdd-837e-13f80bc5364d' #uuid(1)
config["client_secret"]='secret'
config["scopes"]='test'
config["redirect_uri"]='http://127.0.0.1:8080'

def get_token(self):
    """
     sposób przekazania parametrów autoryzacji zależy od implementacji
     tu: JSON
    """
    params = {
          'client_id': config["client_id"],
          'client_secret': config["client_secret"],
          'scopes': config["scopes"],
          'response_type': 'token',
          'grant_type': 'client_credentials',
          'redirect_uri': config["redirect_uri"]
      }
    try:
      resp = requests.post(token_url, params)
      respdata = json.loads(resp.text)
      if 'access_token' in respdata:
        return respdata['access_token']
      else:
        pprint(respdata)
        return None

    except Exception as e:
      print(e)
      return None


if __name__ == "__main__":
  print(get_token())
