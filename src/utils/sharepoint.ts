import axios from 'axios';
import { readFileSync } from 'fs';
import * as msal from '@azure/msal-node';
import path from 'path';

const tenantId = `${import.meta.env.SHAREPOINT_TENANT_ID}`;
const clientId = `${import.meta.env.SHAREPOINT_CLIENT_ID}`;
const thumbprint = `${import.meta.env.SHAREPOINT_THUMBPRINT}`;

let cca;

export async function initializeMsal() {
  const privateKeyPath = path.join('src', 'utils', 'certs', 'privateKey.pem');

  const clientCertificate = {
    thumbprint,
    privateKey: readFileSync(privateKeyPath, 'utf8'),
  };

  cca = new msal.ConfidentialClientApplication({
    auth: {
      clientId,
      authority: `https://login.microsoftonline.com/${tenantId}`,
      clientCertificate,
    },
  });
}

export async function getAccessToken() {
  try {
    if (!cca) {
      await initializeMsal();
    }
    const result = await cca.acquireTokenByClientCredential({
      scopes: ['https://xdvxr.sharepoint.com/.default'],
    });
    return result.accessToken;
  } catch (error) {
    console.error('Error acquiring token:', error);
    throw error;
  }
}

export async function fetchAllPosts() {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      console.error('Failed to acquire access token');
      return;
    }

    const siteUrl = `${import.meta.env.SHAREPOINT_SITE_URL}/_api/web/lists/getbytitle('Site%20Pages')/items?$filter=PublishToWeb eq 1 &$select=Title,Description,BannerImageUrl,FileLeafRef,CanvasContent1,Created,Author/Title,Author/Id&$expand=Author&$orderby=Created desc`;
    const response = await axios.get(siteUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json;odata=verbose',
      },
    });

    if (!response.data.d.results) {
      return [];
    }

    return response.data.d.results;
  } catch (error) {
    console.error('Error connecting to SharePoint:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error(
        'Response data:',
        JSON.stringify(error.response.data, null, 2)
      );
    }
  }
}

export async function fetchPostByFileName(slug: string) {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      console.error('Failed to acquire access token');
      return;
    }

    const siteUrl = `${import.meta.env.SHAREPOINT_SITE_URL}/_api/web/lists/getbytitle('Site Pages')/items?$filter=FileLeafRef eq '${slug}.aspx'&$select=Title,FileLeafRef,CanvasContent1,Created,Author/Title,Author/Id&$expand=Author`;

    const response = await axios.get(siteUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json;odata=verbose',
      },
    });

    return response.data.d.results[0];
  } catch (error) {
    console.error('Error connecting to SharePoint:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error(
        'Response data:',
        JSON.stringify(error.response.data, null, 2)
      );
    }
  }
}
