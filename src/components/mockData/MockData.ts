import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: '',
      lastName: '',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    account_details: {
      wallet_address: 'bc1qw508d...za67d7',
      balance_usd: 20000.0
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
        quantity: 0.0047,
        amount_in_usd: 300.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.024,
        amount_in_usd: 1500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00095,
        amount_in_usd: 60.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00039,
        amount_in_usd: 25.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 800.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.042,
        assetRecentPrice: 2685.0
      },
      {
        assetsName: 'BCH',
        assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'ETH',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'BNB',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0,
        assetRecentPrice: 0.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: '',
      lastName: '',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'Lordzigg',
      password: '$Roberts24'
    },
    account_details: {
      wallet_address: '35tuPvcdn...81mHffLpX',
      balance_usd: 20000.0
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
        quantity: 0.0047,
        amount_in_usd: 300.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.024,
        amount_in_usd: 1500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00095,
        amount_in_usd: 60.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00039,
        amount_in_usd: 25.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 800.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 8, 2023',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.012,
        amount_in_usd: 756.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'July 20, 2023',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.0067,
        amount_in_usd: 421.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'March 4, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.015,
        amount_in_usd: 962.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'January 4, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.0061,
        amount_in_usd: 385.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.083,
        assetRecentPrice: 20000.0
      },
      {
        assetsName: 'BCH',
        assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'ETH',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'BNB',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0,
        assetRecentPrice: 0.0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: '',
      lastName: '',
      email: 'm*@gmail.com',
      jointNames: '',
      username: 'Marinakouti2@gmail.com',
      password: 'Marinaahmed01'
    },
    account_details: {
      wallet_address: '35tuPvcdn....81mHffLpX',
      dubWalletAddress: '35tuPvcdn....81mHffLpX',
      balance_usd: 20000.0
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
        quantity: 0.082,
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
        quantity: 0.082,
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
        quantity: 0.082,
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
        quantity: 0.082,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.33,
        assetRecentPrice: 20000.0
      },
      {
        assetsName: 'BCH',
        assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'ETH',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'BNB',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0,
        assetRecentPrice: 0.0
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      firstName: '',
      lastName: '',
      email: 'mialinday5@gmail.com',
      jointNames: '',
      username: 'mialinday5@gmail.com',
      password: 'Babyboo123'
    },
    account_details: {
      wallet_address: '35tuPvcdn....81mHffLpX',
      dubWalletAddress: '35tuPvcdn....81mHffLpX',
      balance_usd: 65000.0
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
        quantity: 0.11,
        amount_in_usd: 7000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'September 9, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.33,
        amount_in_usd: 20500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 29, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.31,
        amount_in_usd: 19580.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 21, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.28,
        amount_in_usd: 17500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'July 15, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1pqw8s5...jktq37',
        status: 'Pending',
        quantity: -0.15,
        amount_in_usd: 9500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'July 2, 2024',
        description: 'Transfer BTC',
        walletAddress: '1L5bfSLN...asQ43p',
        status: 'Failed',
        quantity: -0.05,
        amount_in_usd: 3100.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'June 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1zfv5wk...8aswe0',
        status: 'Success',
        quantity: 0.25,
        amount_in_usd: 15000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'June 10, 2024',
        description: 'Deposit BTC',
        walletAddress: '1MKYzv8f...R65gWp',
        status: 'Success',
        quantity: 0.4,
        amount_in_usd: 25000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 1.04,
        assetRecentPrice: 65000.0
      },
      {
        assetsName: 'BCH',
        assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'ETH',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'BNB',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0,
        assetRecentPrice: 0.0
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      firstName: '',
      lastName: '',
      email: 'm@gmail.com',
      jointNames: '',
      username: 'LillyMulling21',
      password: '@lilmu1221!'
    },
    account_details: {
      wallet_address: '35tuPvcdn....81mHffLpX',
      dubWalletAddress: '35tuPvcdn....81mHffLpX',
      balance_usd: 29100.67
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
        quantity: 0.1,
        amount_in_usd: 7000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'September 9, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.036,
        amount_in_usd: 2500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 29, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.023,
        amount_in_usd: 1580.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 21, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.017,
        amount_in_usd: 1200.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'July 15, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1pqw8s5...jktq37',
        status: 'Pending',
        quantity: -0.15,
        amount_in_usd: 9500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'July 2, 2024',
        description: 'Transfer BTC',
        walletAddress: '1L5bfSLN...asQ43p',
        status: 'Failed',
        quantity: -0.05,
        amount_in_usd: 3100.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'June 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1zfv5wk...8aswe0',
        status: 'Success',
        quantity: 0.0072,
        amount_in_usd: 500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'June 10, 2024',
        description: 'Deposit BTC',
        walletAddress: '1MKYzv8f...R65gWp',
        status: 'Success',
        quantity: 0.072,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.42,
        assetRecentPrice: 29100.0
      },
      {
        assetsName: 'BCH',
        assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'ETH',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'BNB',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0,
        assetRecentPrice: 0.0
      }
    ]
  },
  {
    account_id: 'ACC006',
    holder: {
      firstName: '',
      lastName: '',
      email: 'k@gmail.com',
      jointNames: '',
      username: 'katherine_Power29',
      password: 'Joseph2024'
    },
    account_details: {
      wallet_address: '35tuPvcdn....81mHffLpX',
      dubWalletAddress: '35tuPvcdn....81mHffLpX',
      balance_usd: 3102.12
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN000',
        date: 'January 2, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1s443...10j837',
        status: 'Success',
        quantity: 0.29,
        amount_in_usd: 1000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN001',
        date: 'December 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.60,
        amount_in_usd: 2000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'Decemeber 9, 2024',
        description: 'Transfer BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: -0.60,
        amount_in_usd: -2000.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'August 29, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.023,
        amount_in_usd: 1580.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'August 21, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.017,
        amount_in_usd: 1200.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'July 15, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1pqw8s5...jktq37',
        status: 'Pending',
        quantity: -0.15,
        amount_in_usd: -9500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN006',
        date: 'July 2, 2024',
        description: 'Transfer BTC',
        walletAddress: '1L5bfSLN...asQ43p',
        status: 'Failed',
        quantity: -0.05,
        amount_in_usd: -3100.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN007',
        date: 'June 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1zfv5wk...8aswe0',
        status: 'Success',
        quantity: 0.0072,
        amount_in_usd: 500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN008',
        date: 'June 10, 2024',
        description: 'Deposit BTC',
        walletAddress: '1MKYzv8f...R65gWp',
        status: 'Success',
        quantity: 0.072,
        amount_in_usd: 5000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.86,
        assetRecentPrice: 3102.12
      },
      {
        assetsName: 'BCH',
        assetsLogo: 'https://i.imgur.com/eZTcmSl.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'ETH',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0,
        assetRecentPrice: 0.0
      },
      {
        assetsName: 'BNB',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0,
        assetRecentPrice: 0.0
      }
    ]
  }
];
