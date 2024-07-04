import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fetchJobListings = async () => {
  // Replace with your actual API call
  return [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York", description: "Develop and maintain software applications." },
    { id: 2, title: "Product Manager", company: "Business Inc", location: "San Francisco", description: "Oversee product development and strategy." },
    { id: 3, title: "UX Designer", company: "Design Studio", location: "Remote", description: "Design user interfaces and experiences." },
  ];
};

const JobListings = () => {
  const { data: jobs, error, isLoading } = useQuery({
    queryKey: ["jobListings"],
    queryFn: fetchJobListings,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;

  return (
    <div className="flex">
      <aside className="w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          <Input placeholder="Location" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Salary Range" />
        </div>
      </aside>
      <main className="w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <p>{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobListings;