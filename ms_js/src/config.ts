type Config = {
  id : number,
  session : string,
  clientId: string,
  authority: string,
  postLogoutRedirectUri: string
};
var CONFIG: Config =
{
  id : 0,
  session : '',
  clientId: '< CLIENT ID FROM AZURE >', 
  // multi tenantauthority: 'https://login.microsoftonline.com/common', 
  //single tenant:
  authority: 'https://login.microsoftonline.com/pwsw.pl',
  postLogoutRedirectUri: 'https://localhost:3000',
};


// example:
const eventScopes = [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite',
    'Group.ReadWrite.All',
    'OnlineMeetings.ReadWrite',
    'Calendars.ReadWrite',
    'Team.ReadBasic.All',
    'TeamSettings.Read.All',
    'TeamSettings.ReadWrite.All',
    'Directory.Read.All',
    'Directory.ReadWrite.All',
    'Directory.AccessAsUser.All',

  ]

export {eventScopes}
export default CONFIG;