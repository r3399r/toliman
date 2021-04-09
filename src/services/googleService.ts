import { GoogleSpreadsheet } from 'google-spreadsheet';

export const aaa = async () => {
  const doc = new GoogleSpreadsheet('1k16_pqSRfqfW-vjtebml8WdQBshF7ova4t7YDhzZT7M');

  await doc.useServiceAccountAuth({
    client_email: 'line-bot@symbolic-math-265616.iam.gserviceaccount.com',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9B8C7qTJUqPUO\n6XXaBgjpsydkNHhSuyEDuvnvABK0tlH3vMwVBcc2eAJzOQD3CxrWd9ydmgdcBvUj\nbwSAEaXPboZiGhamNtnXkPc4q2eZnunu4qwrDaJptyGYvUKROUwbKb69koR/qVec\nKk9ePN5bnK4czYe9uMiX0NIsWDdPmPMGS060l+ez3MPOCRnItWbQgsyI7Bb7ELEq\nDYDl3efuQsENEd4QhRd+35ZWhNkCJXscy1AVapT+k3NyJXrbczXN1A289HV9sydI\njEJq/AZ4GBYXfZ29VbdFQYyZ3sEyLOuxEfgGUjPquhAvAtlu4lQXLEdHgymZM+eC\nk8IwP3y7AgMBAAECggEAFwKdlyUb0lXALEYw/rmOANy6Znvt9awqcv4iCdI0H2QI\n4E5OzXRRnAjJy5Ax1OC42J3om2qyNfqcK+m0s4jyan4QGlsF93UP2X91CKSczNod\nAeOn2j8jo8NoxziqpMDudGla0FAd6ZMJ7iGcXbgCcpvE+g6Zf80W5fFuftASPjxa\n7iYR/rPH53Me0b2YOq/WKsdSFb1eNjSaR5O/sPFAzmLfCM+sRqnJxc3LGf4LQB1q\nMkkvA+u+SRZSnxqMh2Z2c6FB6WR2ZV0MGqyjIHubjRqcxktzcz5AAiHwGGBjeJGC\nzkxOR3jsJ+E+sHndAszyBuUk8KnT3+KsTwEvIX2FoQKBgQD/eoglhbg5Hxz1w6w7\ngp/6NYZ43pN5L+OHCeIH58bGDpRtUu6rObJdQEUh8KoPmdozzJWEDdIHZMcfBTj1\niLzwJ6hybieumqlqlaFyxBXpZW0xP5omjqQCx4wwy4G4Kpd67jly0yYIoHGNvk5v\nldemwqKl4hDRgT6aOb9UHo1ycQKBgQC9aoG/Owg+wIz82lqqbepaoE68vEfIFzlX\n0MIEhGtM+I+M44rd1XD1PQCI4L4MTyALPZNGZQQ1AcJ0nnm3T0Hd01yfRtngUW7x\nfsTuL8p2QlYz5MVHBpeATRVwLwBwuSATrOSWv9NNt8rJIcHgHpIO0BO3m8KoZBQa\nBsCSpqff6wKBgQCA5ifPFrquR15rOYCqvetNaLgiP9qUaG8Z8QiUCIMn5q9IwXEd\n/wxZNFYtG6oSGQQY4n4FlJuFk3lL02y7pXP+j2PT6HQpCmu0FS7SItETY1NGZ9q0\n3X8uz9ORwvv+Ga84HP3rS1GDRMBGTeBxOF8ICmfZ3keyDM2zLrO0E342YQKBgE0s\nrfyKQsu+jDMhjDtQWWHfWvVPCTgfLj/3UHWitk1AIMzYkOXdZw6kcilS2FwPiRDL\nX8wYsGQgeWgmgZUMd9u3mE9VAMSCqV8/tWEOm8EfOhweo7pSlzuxLIDuxZEn/EfH\n88LwGVna/oaAeIumKQBcCwyOK/uL+xy3j5Kw0ElNAoGBALagmZF/04oHfDnEg2bT\nGVfgTBQLoKk0mhN7QQjabfYj9Q7M3856/jHSuxW4l7FkQTma2CtNz7HMohdojniC\nCoVJ1VV84/SdLC+lefpnjZYLNnAXWTEa3IEEaL7RJpGgIzewQAwOHTyH8iVXbA0l\nSNY4JM1ib43Waswh49yoACTY\n-----END PRIVATE KEY-----\n',
  });

  await doc.loadInfo();
  const sheet = doc.sheetsById['1496271896'];

  await sheet.setHeaderRow(['Name', 'Value']);
  await sheet.addRow({ Name: 'new name', Value: 'new value' });
};
