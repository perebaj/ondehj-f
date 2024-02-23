import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl={'/events'}
        afterSignUpUrl={'/events'}
      />
    </div>
  )
}
