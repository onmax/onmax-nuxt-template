import { D1Dialect } from '@atinux/kysely-d1'
import { betterAuth } from 'better-auth'
import { admin, anonymous } from 'better-auth/plugins'

let _auth: ReturnType<typeof betterAuth>
export function serverAuth() {
  const { github } = useRuntimeConfig()

  let baseURL = ''
  try {
    baseURL = getRequestURL(useEvent()).origin
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (_e) {}

  if (_auth)
    return _auth

  _auth = betterAuth({
    database: { dialect: new D1Dialect({ database: hubDatabase() }), type: 'sqlite' },
    secondaryStorage: {
      get: key => hubKV().getItemRaw(`_auth:${key}`),
      set: (key, value, ttl) => hubKV().set(`_auth:${key}`, value, { ttl }),
      delete: key => hubKV().del(`_auth:${key}`),
    },
    baseURL,
    emailAndPassword: { enabled: true },
    socialProviders: { github },
    account: { accountLinking: { enabled: true } },
    plugins: [anonymous(), admin()],
  })
  return _auth
}
