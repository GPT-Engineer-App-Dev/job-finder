import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const fetchFeaturedJobs = async () => {
  // Replace with your actual API call
  return [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York" },
    { id: 2, title: "Product Manager", company: "Business Inc", location: "San Francisco" },
    { id: 3, title: "UX Designer", company: "Design Studio", location: "Remote" },
  ];
};

const Index = () => {
  const { data: jobs, error, isLoading } = useQuery({
    queryKey: ["featuredJobs"],
    queryFn: fetchFeaturedJobs,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Welcome to Job Finder</h1>
        <p className="text-lg text-muted-foreground">Find your dream job today</p>
      </header>
      <div className="flex justify-center">
        <Input placeholder="Search for jobs..." className="w-full max-w-md" />
      </div>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Jobs</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;