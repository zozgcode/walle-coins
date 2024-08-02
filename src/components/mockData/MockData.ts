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
      balance_usd: 5209.0
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
        assets: "BTC"
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.024,
        amount_in_usd: 1500.0,
        assets: "BTC"
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00095,
        amount_in_usd: 60.0,
        assets: "BTC"
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00039,
        amount_in_usd: 25.0,
        assets: "BTC"
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 800.0,
        assets: "BTC"
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
  }
];
