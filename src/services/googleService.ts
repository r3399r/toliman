import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

let doc: GoogleSpreadsheet;

const initGoogleSpreadsheet = async () => {
  const tmpDoc = new GoogleSpreadsheet('1tr5Kbe-q99fNAZSBwvMpA6ZUaHvkPZiu66mpwJaYKf0');
  await tmpDoc.useServiceAccountAuth({
    client_email: 'tolimanbuilder@toliman-310514.iam.gserviceaccount.com',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzZ2sZNOuzTP05\nGX4fDAjicsppzqvLrib/NEWueo2kXuhfpt7QL6+ma4ovX3Dsd79wicybYJowg+3g\nOkWz004AtG2+X21k0eyDuWLUrcbrZ4NqAFpP2OTJKkdIKffegpfNzKjzbjIYbv88\nOcbvU8EOsJ4Qz1zU/YrX8D+qkSy34pdNykx2e9Am9jI3W98jUYFcY936e0z5M7cL\n75T56b5xjhSBYF0K3vmI4v8qzbyxdRdP6dVr6mUE66P9XBjO0Xuw+VV32CFtPmFa\nbmMtJXVzuQm8ksjd0wskvn7Qya/WIklhhT86eFuNj0rouUOdCRByMPS2kTtf7JLY\nPg4NsFODAgMBAAECggEAAw8g4uGloT2PVdFq9qGQZzgY3nwBLuxtys074PFDCAn8\nQWFJjFg70QUlapBgjw+tqoAXBpE7n9coD7o+pQXV3yo0ctoStfTkaQyYtFKwQSRX\nN9AAujrTD+ESLRdWHCuy5fX27Yuz+/msjXzYuQz/Dj6Ru2ylwxX9r5fvpftqvUnv\nBos6jL1z1inrilGQqK5yqLP6x8Bw1nQf0jku4w32ufzuAzMz8gXAp+UI2Cp+VBaq\naefntiStusyFr/UnY8DssDSZBGqqJ/YhqUQ7JA19ncbdJR28200Sob+rigpwgwl+\npa5vb0qNu0WmJHHziE3TPya/xq54S6/YKB7CKNbWKQKBgQDWZytooVbfK9fG0X+g\nVBmTNPl8yL5NsTkOoC6QSLSfD5D+GhxRHkXzU9NKHo+aXz2jpva6u1WNk1Xt+pIY\n+nzMevFXoQYHt6MD9x0QFFTff5q4A14nH7iZW0HVl2JN7vVu6DqN7i7PxSoiKnVQ\nOn8ETveMJ5y/+VE7SwPajtylOwKBgQDWNfCJWiBXlVjnRuj2736jjY4Bf84LGmZ+\nMKZODw0VUG2RKXqI86dqZbKlFKQxFAWgMz4aGyFMZUVrrZtNKoIrsBEalfLXtGVF\n7iqhfidekZ4NANIh59ACCRpRjUDFGepgj7kVeEYaxTciFAkU4xZZWAde1pn/46dn\nmHjKjZqGWQKBgQC3IK3yE4Ro4EDQf9Z78flaQ/ApBimNoKb0eBrtgDxOc/RLJbA0\nFSB4QowBDfNoTpsOcijhu+rKHyNRPimVjjYUTZpgV5gX9WEWnPZE6qjHsW1MaQv9\nbNm2mzyzHDeKC2W1EkQZQGzZaDWhsxQ6r4wX+P71xkvbqS8Z7uvevRF3SwKBgQC3\nyyoqP4k2fK7+KYpjrZPj8uXgBW+deTZtmYJnwWRBYHPSNFutvBluIfoIyFAkyAAX\ntz/WmGaWrOHGhPuWVx2/LF9Qh04IpACs4q/zRlGzQ4/vqj+h1ctUo8jQJjlnpFfE\nKCzu7faAq6wlcjlkkX+wguY4CjuyIfuV2G3zpVHraQKBgFfWPVCvgItCTCJVSlmC\nWgnbpeJi/sXiVlBhqsI8Mug93rE7unjQMREznsocoj1xazU5k06yPhxrAW4nPUnH\nVz477ABzWPV1FA6onnBrgTVxjirK2jnpMUmJhvcTorCbyQIYLFIMSAxzzxvgOZy1\nJ8nLltHU+PDOv0QL5e/cGURS\n-----END PRIVATE KEY-----\n',
  });

  await tmpDoc.loadInfo();
  doc = tmpDoc;
};

export const addRow = async (sheetId: string, json: { [key: string]: string | boolean }) => {
  if (doc === undefined) await initGoogleSpreadsheet();
  const sheet = doc.sheetsById[sheetId];
  await sheet.addRow(json);
};

export const getRows = async (sheetId: string) => {
  if (doc === undefined) await initGoogleSpreadsheet();
  const sheet = doc.sheetsById[sheetId];

  return await sheet.getRows();
};
