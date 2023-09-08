import SignInButton from '@/components/SignInButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/db'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getAuthSession();
  if(session?.user){
    return redirect("/dashboard");
  } else {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="w=[300px]">
          <CardHeader>
            <CardTitle className='flex justify-center'>Welcome to QuizGrok!</CardTitle>
            <CardDescription>
              QuizGrok is a quiz generator that harnesses AI and allows you to create and share quizzes on any topic with your friends.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex justify-center'>
            <SignInButton text='Sign In with Google!'/>
          </CardContent>
        </Card>
      </div>
    )
  }
}
