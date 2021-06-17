#!/usr/bin/python3
# coding: utf-8
#
# przykład -  MsTeams
#
# pip install msal
config={}
config['TENANT_ID'] = ''
config['CLIENT_ID']= ''
config['CLIENT_SECRET']= '' 
config['SCOPE'] =[ "https://graph.microsoft.com/.default" ]
config['AUTHORITY'] = "https://login.microsoftonline.com/"+config['TENANT_ID']

