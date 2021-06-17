#!/usr/bin/python3
# coding: utf-8
#
# przykład -  MsTeams
#
# pip install msal
import msal
import requests
import json

from config import config

q_groups = 'https://graph.microsoft.com/v1.0/groups'

app = msal.ConfidentialClientApplication(
    config['CLIENT_ID'], authority=config['AUTHORITY'],
    client_credential=config['CLIENT_SECRET'],
)


def token():
  result = app.acquire_token_silent(config["SCOPE"], account=None)
  if not result:
    print("No suitable token exists in cache. Let's get a new one from AAD.")
    result = app.acquire_token_for_client(scopes=config["SCOPE"])
  return result


def list_groups():
  groups=[]
  endpoint = q_groups
  result=token()
  print(result)
  if "access_token" in result:
    # Calling graph using the access token
    graph_data = requests.get(  # Use token to call downstream service
        endpoint,
        headers={'Authorization': 'Bearer ' + result['access_token']}, ).json()
    for gd in graph_data['value']:
      try:
        groups.append({
       "id": gd['id'],
       "createdDateTime": gd["createdDateTime"],
       "description": gd["description"],
       })
      except Exception as e:
        print(e)
  else:
    print(result.get("error"))
    print(result.get("error_description"))
    print(result.get("correlation_id"))  # You may need this when reporting a bug
  return groups


for gr in list_groups():
  print(gr['id'])
  print(gr["createdDateTime"])
  print(gr["description"])
  print('----------------------')
