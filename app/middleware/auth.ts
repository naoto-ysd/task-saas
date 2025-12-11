import { useAuthStore } from "~/stores/auth"

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()

  const publicPages = ['/login', '/signup']

  if (!auth.user && !publicPages.includes(to.path)) {
    return navigateTo('/login')
  }
})
