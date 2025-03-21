import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const ORDER_STATUS_OPTIONS = [
  { value: 'uploading', label: 'Uploading' },
  { value: 'verified', label: 'Verified' },
  { value: 'unverified', label: 'Unverified' },
  { value: 'processing', label: 'Processing' },
];

const ITEMS = [...Array(3)].map((_, index) => ({

  id: _mock.id(index),
  sku: `16H9UR${index}`,
  quantity: index + 1,
  name: _mock.productName(index),
  coverUrl: _mock.image.product(index),
  price: _mock.number.price(index),
}));

// export const _orders = [...Array(20)].map((_, index) => {
 
//   const shipping = 10;

//   const discount = 10;

//   const taxes = 10;

//   const items = (index % 2 && ITEMS.slice(0, 1)) || (index % 3 && ITEMS.slice(1, 3)) || ITEMS;

//   const totalQuantity = items.reduce((accumulator, item) => accumulator + item.quantity, 0);

//   const subtotal = items.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);

//   const totalAmount = subtotal - shipping - discount + taxes;

//   const customer = {
//     id: _mock.id(index),
//     name: _mock.fullName(index),
//     email: _mock.email(index),
//     avatarUrl: _mock.image.avatar(index),
//     ipAddress: '192.158.1.38',
//   };

//   const delivery = { shipBy: 'DHL', speedy: 'Standard', trackingNumber: 'SPX037739199373' };

//   const history = {
//     orderTime: _mock.time(1),
//     paymentTime: _mock.time(2),
//     deliveryTime: _mock.time(3),
//     completionTime: _mock.time(4),
//     timeline: [
//       { title: 'Delivery successful', time: _mock.time(1) },
//       { title: 'Transporting to [2]', time: _mock.time(2) },
//       { title: 'Transporting to [1]', time: _mock.time(3) },
//       { title: 'The shipping unit has picked up the goods', time: _mock.time(4) },
//       { title: 'Order has been created', time: _mock.time(5) },
//     ],
//   };

//   return {
//     id: _mock.id(index),
//     orderNumber: `#601${index}`,
//     createdAt: _mock.time(index),
//     taxes,
//     items,
//     history,
//     subtotal,
//     shipping,
//     discount,
//     customer,
//     delivery,
//     totalAmount,
//     totalQuantity,
//     shippingAddress: {
//       fullAddress: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
//       phoneNumber: '365-374-4961',
//     },
//     payment: { cardType: 'mastercard', cardNumber: '**** **** **** 5678' },
//     status:
//       (index % 2 && 'completed') ||
//       (index % 3 && 'pending') ||
//       (index % 4 && 'cancelled') ||
//       'refunded',
//   }
// });

export const _emailsListData =  [
  {
    id: 1,
    status: 'uploading',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'List 1',
    date: 'Oct 23, 2024 17:45:32',
    containedEmails:"218",
    creditStatus:false
  },
  {
    id: 2,
    status: 'unverified',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'List 2',
    date: 'Oct 23, 2024 17:45:32',
    containedEmails:"65",
    creditStatus:false
  },
  {
    id: 3,
    status: 'unverified',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'List 3',
    date: 'Oct 23, 2024 17:45:32',
    containedEmails:"250",
    creditStatus:false
  },
  {
    id: 4,
    status: 'processing',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'List 4',
    date: 'Oct 23, 2024 17:45:32',
    containedEmails:"65",
    creditStatus:true
  },
  {
    id: 5,
    status: 'verified',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'List 5',
    date: 'Oct 23, 2024 17:45:32',
    containedEmails:"653344",
    creditStatus:true
  },
];

export const _creditsSummaryListData = [
  {
    id: 1,
    status: 'Bulk Verification',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'List 1',
    listSubName:'Pabbly Connect',
    date: 'Oct 23, 2024 17:45:32',
   credits:-9,
    creditStatus:true
    
  },
  {
    id: 2,
    status: 'Bulk Verification',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'List 2',
    listSubName:'Pabbly Hook',
    date: 'Oct 23, 2024 17:45:32',
    credits:-9,
    creditStatus:true
  },
  {
    id: 3,
    status: 'Single Verification',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'ankit.mandli1@pabbly.com',
    listSubName:'Email address',
    date: 'Oct 23, 2024 17:45:32',
    credits:-7,
    creditStatus:true
  },
  {
    id: 4,
    status: 'Email Credits Purchased',
    items: [{ name: 'rohit', id: 11 }],
    listName: 'Email Credits Allotted',
    date: 'Oct 23, 2024 17:45:32',
    credits:-1,
    creditStatus:false
  },
];


export const _teamMembersListData1 = [
  {
    id: 1,
    status: 'Email Credits Purchased',
    items: [{ name: 'rohit', id: 11 }],
    email:"neeraj.agarwal@pabbly.com",
    companyName:"Company A",
    access:"Write Access",
    date: 'Oct 23, 2024 17:45:32',
  },
  {
    id: 2,
    status: 'Email Credits Purchased',
    items: [{ name: 'rohit', id: 11 }],
    email:"neeraj.agarwal@pabbly.com",
    companyName:"Company A",
    access:"Write Access",
    date: 'Oct 23, 2024 17:45:32',
  },
  {
    id: 3,
    status: 'Email Credits Purchased',
    items: [{ name: 'rohit', id: 11 }],
    email:"neeraj.agarwal@pabbly.com",
    companyName:"Company A",
    access:"Write Access",
    date: 'Oct 23, 2024 17:45:32',
  },
  {
    id: 4,
    status: 'Email Credits Purchased',
    items: [{ name: 'rohit', id: 11 }],
    email:"neeraj.agarwal@pabbly.com",
    companyName:"Company A",
    access:"Write Access",
    date: 'Oct 23, 2024 17:45:32',
  },
  {
    id: 5,
    status: 'Email Credits Purchased',
    items: [{ name: 'rohit', id: 11 }],
    email:"neeraj.agarwal@pabbly.com",
    companyName:"Company A",
    access:"Write Access",
    date: 'Oct 23, 2024 17:45:32',
  },
]

export const _teamMembersListData2 = [ 
  {
  id: 1,
  status: 'Email Credits Purchased',
  items: [{ name: 'rohit', id: 11 }],
  email:"neeraj.agarwal@pabbly.com",
  companyName:"Company A",
  access:"Write Access",
  date: 'Oct 23, 2024 17:45:32',
},
  {
  id: 1,
  status: 'Email Credits Purchased',
  items: [{ name: 'rohit', id: 11 }],
  email:"neeraj.agarwal@pabbly.com",
  companyName:"Company A",
  access:"Write Access",
  date: 'Oct 23, 2024 17:45:32',
},
]


export const timezone = [
  '(GMT-12:00) International Date Line West',
  '(GMT-11:00) Midway Island, Samoa',
  '(GMT-10:00) Hawaii',
  '(GMT-09:00) Alaska',
  '(GMT-08:00) Pacific Time (US & Canada)',
  '(GMT-08:00) Tijuana, Baja California',
  '(GMT-07:00) Arizona',
  '(GMT-07:00) Mountain Time (US & Canada)',
  
];
