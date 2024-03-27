import { routeConfig } from '@/config/routes'

export function generatePermission(role: string) {
  console.log(
    '%c [ role ]-4',
    'font-size:13px; background:pink; color:#bf2c9f;',
    role,
  )
  // const actions = role === 'admin' ? ['*'] : ['read'];
  const result = routeConfig
  // routeConfig.forEach((item) => {
  // if (item.children) {
  //   item.children.forEach((child) => {
  //     result[child.name] = actions;
  //   });
  // }
  // });
  return result
}
