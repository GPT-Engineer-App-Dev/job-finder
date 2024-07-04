import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const PostJob = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <FormLabel>Job Title</FormLabel>
          <FormControl>
            <Input {...register("title", { required: "Job title is required" })} />
          </FormControl>
          <FormMessage>{errors.title?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Company Name</FormLabel>
          <FormControl>
            <Input {...register("company", { required: "Company name is required" })} />
          </FormControl>
          <FormMessage>{errors.company?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Location</FormLabel>
          <FormControl>
            <Input {...register("location", { required: "Location is required" })} />
          </FormControl>
          <FormMessage>{errors.location?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Job Type</FormLabel>
          <FormControl>
            <Select {...register("type", { required: "Job type is required" })}>
              <SelectTrigger>
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage>{errors.type?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Salary Range</FormLabel>
          <FormControl>
            <Input {...register("salary", { required: "Salary range is required" })} />
          </FormControl>
          <FormMessage>{errors.salary?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Job Description</FormLabel>
          <FormControl>
            <Textarea {...register("description", { required: "Job description is required" })} />
          </FormControl>
          <FormMessage>{errors.description?.message}</FormMessage>
        </FormField>
        <Button type="submit" className="mt-4">Post Job</Button>
      </Form>
    </div>
  );
};

export default PostJob;