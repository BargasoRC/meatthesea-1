import Color from './Color.js';
import { faCreditCard, faEdit, faComments, faCheck, faPaperPlane, faUser, faTachometerAlt, faQuestionCircle, faUsers, faFile, faShippingFast } from '@fortawesome/free-solid-svg-icons';
export default {
  company: 'Increment Technologies',
  APP_NAME: '@MeatTheSea_',
  APP_NAME_BASIC: 'MeatTheSea',
  APP_EMAIL: 'support@meatthesea.co.uk',
  APP_WEBSITE: 'www.meatthesea.co.uk',
  APP_HOST: 'com.meatthesea',
  DrawerMenu: [
  {
    title: 'Dashboard',
    route: 'Dashboard',
    icon: faShippingFast,
    iconStyle: {
      color: Color.primary
    }
  }
  ],
  DrawerMenuLogout: [],
  DrawerMenuBottom: [{
    title: 'Settings',
    route: 'Settings'
  }
  // {
  //   title: 'Terms and Conditions',
  //   route: 'TermsAndConditions'
  // }, {
  //   title: 'Privacy Policy',
  //   route: 'PrivacyPolicy'
  // }
  ],
  pagerMenu: [{
    title: 'FEATURED',
    value: 'featured'
  }, {
    title: 'CATEGORIES',
    value: 'categories'
  }, {
    title: 'SHOPS',
    value: 'shops'
  }, {
    title: 'OTHERS',
    value: 'others'
  }],
  pusher: {
    broadcast_type: 'pusher',
    channel: 'meatthesea',
    notifications: 'App\\Events\\Notifications',
    typing: 'typing',
    messages: 'App\\Events\\Message',
    messageGroup: 'App\\Events\\MessageGroup',
  },
  tutorials: [
    {
      key: 1,
      title: 'Welcome to MTS!',
      text: 'Delivering food and more to your doorstep!',
      icon: null,
      image: require('assets/logo.png'),
      colors: [Color.primary, Color.lightGray]
    }
  ],
  referral: {
    message:
      `Share the benefits of <<popular products>> with your friends and family. ` +
      `Give them ₱100 towards their first purchase when they confirm your invite. ` +
      `You’ll get ₱100 when they do!`,
    emailMessage: 'I\'d like to invite you on MeatTheSea!'
  },
  categories:[
    {
      type:'Asian',
    },
    {
      type:'American',
    },
    {
      type:'Beverages',
    }
  ],
  paymentCenters: [{
    title: 'BDO',
    value: 'bdo',
    account_name: 'MTS Mobile Application',
    account_number: '123-123-123-123'
  }],
  currency: [{
    title: 'PHP',
    value: 'php'
  }],
  retrieveDataFlag: 1,
  validateEmail(email){
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/
    if(reg.test(email) === false){
      return false
    }else{
      return true
    }
  }
}