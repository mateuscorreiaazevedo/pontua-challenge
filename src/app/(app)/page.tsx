import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/main/ui/card'

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-[700px] shadow">
        <CardHeader>
          <CardTitle className="text-center">Hello World</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Hello</CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
