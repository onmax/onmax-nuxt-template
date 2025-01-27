type MiddlewareOptions = Auth

declare module '#app' {
  interface PageMeta {
    auth?: MiddlewareOptions
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    auth?: MiddlewareOptions
  }
}

export default defineNuxtRouteMiddleware(async (to) => {
  const authOption = to.meta?.auth ?? Auth.User // Routes requiring auth by default
  if (!authOption)
    return

  const { loggedIn, fetchSession, options: { redirectGuestTo, redirectUserTo } } = useAuth()

  // Fetch session on client side
  if (import.meta.client)
    await fetchSession()

  if (authOption === Auth.User && !loggedIn.value)
    return navigateTo(redirectGuestTo)

  if (authOption === Auth.Guest && loggedIn.value)
    return navigateTo(redirectUserTo)

  // allow anyone
})
