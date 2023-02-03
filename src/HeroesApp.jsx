import { AuthProvider } from "./auth"
import { AppRouter } from "./router/RouterApp"

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </>
  )
}
