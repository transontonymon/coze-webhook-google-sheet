// 📁 googleSheet.js
const { GoogleSpreadsheet } = require('google-spreadsheet');

// Thông tin Google Sheets
const GOOGLE_SHEET_ID = '1GCsUtsAjI7cRQ0Ri1TRWu5gVTBaB6xOSv6HinC0MSV4';
const GOOGLE_SERVICE_ACCOUNT_EMAIL = 'cozewritersheet@coze-to-sheet.iam.gserviceaccount.com';
const GOOGLE_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDhClivCQ3fbVri
xKh+epYCXllEBk/czinGhJ9famWAaN7ZBHn0GiCxws3IlbdjWBnVOrZzpA2g+8x6
rKK8HtaqxQj11jvFPasPq85Lmsu+LUS5lsc0N4ARBnQHM2MJQrNk+YbNmShIkw1B
XcjAhsCnVkBcABnNSvT2SmTGGRA1LetEbAyZNwKvDVNzBgAYZcGdD+g9mMYuZilu
zPLOxIkvQv4aqItM3QYLDTjX69Y3pPdOMGt6GzOjlb5M3t5Gg3HtUJ1PGMxmxL5W
MOs9JIhs5Jc7n4B9YBp0bMOPDrwcaj1rbxsF0gGyMcIvWymfibBivYyOTfHdD35g
9WPIbQ27AgMBAAECggEAZKnPpLBMo9JTUte8NSNZocKZdIvMQo1382SUs8YwlCGU
+Yd+k9nyIQHuMhkCeO5KU+7Y+V57eDTaMU+y1aqHxMixauJDR0YAFFj6RSh/ldjD
Aq92+R0QbM0xrpzmYpiTDYpuqd4mPlyFE+XDLJe6ar/ytxSWdhXfAKKjdFd2wAos
zy0kr2vuUuBwin/5SjbuTx//E0+IPycSSzAoTXPbVXIn1oItyV139hidfotmJwB1
U2dh9bRHgC+u6TiUWKn4TpkT6aQJUj4e0x7ZY9Pozxx08ZklVRH2KhSfk+TKBy3i
hJpwgq0DcfLCunzkYqgZqtHESfKrm2TdcEE/9bmNWQKBgQD8cOk0LzVlBnBq7+IZ
syeTGR+trqVKxEmOk4hsBRHCaktRHueWv7XLd0ObXpInND9OdEgLq2n413Gq7c6M
VgnmKPWiT5fW4ysI7KY9VTNw1uRzWZQzmZFocbmbX/wz5OlUtrATbtKCMRlquiVm
HV3uvbrDVe+RGmn8EW5VGfzwAwKBgQDkNosabW7OUFvxY7PraAW1OCZnaAC6mhKa
KhRkgdYnbGAjAdcW/OkcceipvM95yOENbg76UijDio2iX2DSH2+T9kI8kbElUFPc
SaGfxDSW5Mm2wF28jS+1OmcHgIW4S1hAtFGVTRkt9bMPQlHhHanUiuaqiVDQ16ui
6sT3EZeJ6QKBgBereqJS/t2vIeFVBs1EGCTZyTee1Y7SIteEi9kdDJI/Jzq+/BYN
eb1PPH6X+npEkt8HVi4J75DOmrDdRW2xL5JuKsICVolmmYVnsxqzH3SoIZmTP6sq
7hBuAWpJMLuo7hvsWUwpKwHcGrcAJzuQ61rUXWutZh4j7OYeuEqweiADAoGAHQG5
yJAkR2D7bsEne0Jrh08twnL7tLwkpSe4E9ZU7AngZlKzjh5zWsQ3uGthS692u4hD
qxmKSOBxhDPvUIXiXsIsRRqXk5CUOCm7u1zq+kr2QJ5Oy8p+R+C2e8OgO36IJyFE
RV/ZVXgnXEcntR9aGMPW8dImTYU8Mab5hhXcVxECgYAJNAAitqDIEwYAPVnh1QX7
aEoBhZRkpzEsv/Y5LEK+zYQgic5wR7W/pm1F2KWNRm2nnU/OwnLDU97HIL44wpP3
lGaij+BPALNezNDsKEssM+npPjE9MegwxVEpSfAT9Jll+FEmJjCFtOpAm01ZVVDK
WjWIPJpn2NOJ44EaDnGmQ==
-----END PRIVATE KEY-----`;

const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);

async function addToSheet(phone, image) {
  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      ThoiGian: new Date().toLocaleString('vi-VN'),
      SoDienThoai: phone,
      HinhAnh: image
    });

    console.log('✅ Đã ghi vào Google Sheet');
  } catch (err) {
    console.error('❌ Lỗi ghi sheet:', err);
  }
}

module.exports = { addToSheet };
