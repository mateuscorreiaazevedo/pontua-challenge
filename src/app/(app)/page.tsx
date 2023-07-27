import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/main/ui/card'
import { SignOutButton } from '@/modules/auth'

export default function Home() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <Card className="w-[700px] shadow">
        <CardHeader>
          <CardTitle className="text-center">Hello World</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Hello</CardDescription>
          <SignOutButton />
        </CardContent>
      </Card>
    </div>
  )
}
