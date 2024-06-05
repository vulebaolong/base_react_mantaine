export const ROUTER_ADMIN = {
   BASE: `/admin`,
   HOME: () => `${ROUTER_ADMIN.BASE}`,
   USER: () => `${ROUTER_ADMIN.BASE}/user`,
   PRODUCT: () => `${ROUTER_ADMIN.BASE}/product`,
   LOGIN: () => `${ROUTER_ADMIN.BASE}/login`,
};

export const ROUTER_CLIENT = {
   BASE: `/`,
   HOME: () => `${ROUTER_ADMIN.BASE}`,
   LOGIN: () => `${ROUTER_ADMIN.BASE}/login`,
   REGISTER: () => `${ROUTER_ADMIN.BASE}/register`,
};
