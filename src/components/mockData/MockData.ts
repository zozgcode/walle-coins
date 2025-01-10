import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      email: 'a*@gmail.com',
      username: 'sample1',
      password: 'sample1'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'August 1, 2024',
        description: 'Bonus Deposit',
        walletAddress: '1A1zP1eP...z8AEuR',
        status: 'Success',
        quantity: 0.0031,
        amount_in_usd: 300.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.015,
        amount_in_usd: 1500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00062,
        amount_in_usd: 60.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00026,
        amount_in_usd: 25.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.0083,
        amount_in_usd: 800.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.042
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      email: 'a*@gmail.com',
      username: 'Lordzigg',
      password: '$Roberts24'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'August 1, 2024',
        description: 'Bonus Deposit',
        walletAddress: '1A1zP1eP...z8AEuR',
        status: 'Success',
        quantity: 0.0031,
        amount_in_usd: 300.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.015,
        amount_in_usd: 1500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00062,
        amount_in_usd: 60.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00026,
        amount_in_usd: 25.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.0083,
        amount_in_usd: 800.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'August 8, 2023',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.0078,
        amount_in_usd: 756.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'July 20, 2023',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.0043,
        amount_in_usd: 421.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'March 4, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.0099,
        amount_in_usd: 962.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN009',
        date: 'January 4, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.0040,
        amount_in_usd: 385.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.083
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      email: 'm*@gmail.com',
      username: 'Marinakouti2@gmail.com',
      password: 'Marinaahmed01'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'August 13, 2024',
        time: '09:22',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.052,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 13, 2024',
        time: '11:00',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.052,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 13, 2024',
        time: '12:03',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.052,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 13, 2024',
        time: '14:33',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.052,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.33
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      email: 'mialinday5@gmail.com',
      username: 'mialinday5@gmail.com',
      password: 'Babyboo123'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'September 27, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.072,
        amount_in_usd: 7000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'September 9, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.21,
        amount_in_usd: 20500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 29, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.20,
        amount_in_usd: 19580.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 21, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.18,
        amount_in_usd: 17500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'July 15, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1pqw8s5...jktq37',
        status: 'Pending',
        quantity: -0.098,
        amount_in_usd: 9500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'July 2, 2024',
        description: 'Transfer BTC',
        walletAddress: '1L5bfSLN...asQ43p',
        status: 'Failed',
        quantity: -0.032,
        amount_in_usd: 3100.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'June 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1zfv5wk...8aswe0',
        status: 'Success',
        quantity: 0.15,
        amount_in_usd: 15000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'June 10, 2024',
        description: 'Deposit BTC',
        walletAddress: '1MKYzv8f...R65gWp',
        status: 'Success',
        quantity: 0.26,
        amount_in_usd: 25000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 1.04
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      email: 'm@gmail.com',
      username: 'LillyMulling21',
      password: '@lilmu1221!'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'October 27, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.072,
        amount_in_usd: 7000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'September 9, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.026,
        amount_in_usd: 2500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 29, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.016,
        amount_in_usd: 1580.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 21, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.012,
        amount_in_usd: 1200.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'July 15, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1pqw8s5...jktq37',
        status: 'Pending',
        quantity: -0.098,
        amount_in_usd: 9500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'July 2, 2024',
        description: 'Transfer BTC',
        walletAddress: '1L5bfSLN...asQ43p',
        status: 'Failed',
        quantity: -0.032,
        amount_in_usd: 3100.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'June 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1zfv5wk...8aswe0',
        status: 'Success',
        quantity: 0.0052,
        amount_in_usd: 500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'June 10, 2024',
        description: 'Deposit BTC',
        walletAddress: '1MKYzv8f...R65gWp',
        status: 'Success',
        quantity: 0.052,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.42
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC006',
    holder: {
      email: 'k@gmail.com',
      username: 'katherine_Power29',
      password: 'Joseph2024'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'January 8, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc153ed...25d672',
        status: 'Success',
        quantity: 0.11,
        amount_in_usd: 10000.0,
        assets: 'BTC'
      },
      {
        date: 'January 5, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc153ed...25d672',
        status: 'Success',
        quantity: 0.011,
        amount_in_usd: 1000.0,
        assets: 'BTC'
      },
      {
        date: 'January 2, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1s443...10j837',
        status: 'Success',
        quantity: 0.010,
        amount_in_usd: 1000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN001',
        date: 'December 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.021,
        amount_in_usd: 2000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'December 9, 2024',
        description: 'Transfer BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: -0.021,
        amount_in_usd: -2000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 29, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.016,
        amount_in_usd: 1580.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 21, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.012,
        amount_in_usd: 1200.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'July 15, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1pqw8s5...jktq37',
        status: 'Pending',
        quantity: -0.098,
        amount_in_usd: -9500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'July 2, 2024',
        description: 'Transfer BTC',
        walletAddress: '1L5bfSLN...asQ43p',
        status: 'Failed',
        quantity: -0.032,
        amount_in_usd: -3100.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'June 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1zfv5wk...8aswe0',
        status: 'Success',
        quantity: 0.0052,
        amount_in_usd: 500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'June 10, 2024',
        description: 'Deposit BTC',
        walletAddress: '1MKYzv8f...R65gWp',
        status: 'Success',
        quantity: 0.052,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.152
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC007',
    holder: {
      email: 't@gmail.com',
      username: 'Tishko419$',
      password: 'VKT$$88'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        date: 'November 28, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1s443...10j837',
        status: 'Success',
        quantity: -4.64,
        amount_in_usd: -450000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 29, 2024',
        description: 'Transfer BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: -0.021,
        amount_in_usd: -2000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 21, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: -0.019,
        amount_in_usd: -1800.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'July 25, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: -0.12,
        amount_in_usd: -12000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'July 9, 2024',
        description: 'Transfer BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: -0.052,
        amount_in_usd: -5000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'June 15, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1pqw8s5...jktq37',
        status: 'Pending',
        quantity: 0.098,
        amount_in_usd: 9500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'June 2, 2024',
        description: 'Transfer BTC',
        walletAddress: '1L5bfSLN...asQ43p',
        status: 'Failed',
        quantity: -0.032,
        amount_in_usd: -3100.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'June 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1zfv5wk...8aswe0',
        status: 'Success',
        quantity: 0.036,
        amount_in_usd: 3500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN009',
        date: 'May 10, 2024',
        description: 'Deposit BTC',
        walletAddress: '1MKYzv8f...R65gWp',
        status: 'Success',
        quantity: 0.052,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 3.61
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  }
];
