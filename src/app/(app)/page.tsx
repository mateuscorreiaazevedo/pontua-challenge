import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/modules/core'

export default function Home() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
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
