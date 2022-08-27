# Bulk_E-Mail_Sender

Sends E-Mail to many people through GMail account that requires 2 factor authentication.

* First set up a project on https://console.cloud.google.com/home/dashboard
* Now under API and Serives, create an OAuth consent screen for that project
* Then go to Credentials and create a new OAuth Client ID.
* Set redirect URL to https://developers.google.com/oauthplayground and save the **client ID** and **secret** somewhere


![image](https://user-images.githubusercontent.com/89719149/187015148-57f0dee6-c22b-4107-9fc7-79fedca76fb4.png)


* Now go that redirect URL mentioned above and enter https://mail.google.com on the authorize section.
* Now go to settings on the top right corner and check **Use your own OAuth credentials** and enter the **client ID** and **secret**

<div align="center">
<img alt="Config settings" src=https://user-images.githubusercontent.com/89719149/187015297-52c35cc2-6b0c-4b96-97d2-e622c48e6e69.png>
</div>

* Now authorize the API and exchange the Authorization code for a refresh token.
* Make a config file saving the username and password of the GMail account from which u want to send the E-Mail and also save the client ID, client secret and refresh token.
* Now in the receivers.json file edit the subject and the receivers property and edit the demoTemplate located inside the template folder under src to use your own E-Mail Template.
* Now write **npm init** to install the required modules and then **node app.js** and you are done.
