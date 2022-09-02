export const routes = {
    adminAuth: '/admin/login',
    getSummarys: '/admin/summary',
    postDataProduct: '/product',
    getDataProducts: (query = '') => `/product/?${query}`,
    getProductDetail: (path = '') => `/product/${path}`,
    deleteProduct: (productId = '') => `/product/${productId}`,
    getMarketplaceList: (query = '') => `/marketplace/?${query}`,
    deleteMarketplaceList: (marketplaceId : string) => `/marketplace/${marketplaceId}`,
};
