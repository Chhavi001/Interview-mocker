import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Advanced Mock Interview Platform
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Practice your interview skills with AI-powered mock interviews tailored to your field and experience level.
        </p>
        
        <div className="flex justify-center gap-4">
          <Button size="lg">
            Start Mock Interview
          </Button>
          <Button variant="outline" size="lg">
            View Practice Questions
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get realistic interview questions powered by advanced AI technology.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Real-time Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive instant feedback on your responses and performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industry Specific</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Practice with questions tailored to your industry and role.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomePage
