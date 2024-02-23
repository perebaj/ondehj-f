import { SignUp } from '@clerk/clerk-react'

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp afterSignInUrl={'/events'} afterSignUpUrl={'/events'} />
    </div>
  )
}
