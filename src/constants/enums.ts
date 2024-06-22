export enum RolesEnums {
  User = 'USER',
  Vip = 'VIP',
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
}

/**
 * 其它更细粒度的权限控制
 */
export enum PermissionEnums {
  Create = 'Create',
  Read = 'Read',
  Update = 'Update',
  Delete = 'Delete',
}

/**
 * https://prisma.nodejs.cn/orm/reference/error-reference#%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81
 * 处理错误码
 */
export enum PrismaEnum {
  NoData = 'P2025',
  Unique = 'P2002',
  TooLong = 'P2000',
}

export enum SellTypeEnum {
  Public = 'PUBLIC',
  System = 'SYSTEM',
}
