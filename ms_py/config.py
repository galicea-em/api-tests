#!/usr/bin/python3
# coding: utf-8
#
# przykład -  MsTeams
#
# pip install msal
config={}
config['TENANT_ID'] =-- konto Azure ---
config['CLIENT_ID']=--- tu wpisz dane z Azure ---
config['CLIENT_SECRET']=--- sekretne hasło --- 
config['SCOPE'] =[ "https://graph.microsoft.com/.default" ]
config['AUTHORITY'] = "https://login.microsoftonline.com/"+config['TENANT_ID']

