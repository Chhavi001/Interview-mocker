import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const HomePage = () => {
  return (   
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0">
          <img 
            src="/assets/img/hero.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Your Next Interview
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Practice with AI-powered mock interviews and boost your confidence
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-200">
                Start Practice
              </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-600 bg-white hover:border-white  hover:text-blue-600 hover:bg-white hover:bg-grey-100 hover:scale-105 transition-all duration-200" title="">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get ready for your dream job with our comprehensive interview preparation tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Practice with realistic interview questions powered by advanced AI</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Real-time Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get instant feedback on your performance and areas for improvement</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Industry Specific</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tailored questions for different industries and job roles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage
