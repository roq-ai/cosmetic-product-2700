interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Marketing Specialist'],
  tenantName: 'Vendor',
  applicationName: 'Cosmetic Products Online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Place an order',
    'View order status',
    'Manage personal user information',
  ],
  ownerAbilities: ['Manage products', 'Manage vendors', 'Manage inventory', 'Monitor orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/36fb03a2-e9a1-4db9-aea6-ec613268a0ef',
};
