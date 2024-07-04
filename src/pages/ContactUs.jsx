import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input {...register("name", { required: "Name is required" })} />
          </FormControl>
          <FormMessage>{errors.name?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input {...register("email", { required: "Email is required" })} />
          </FormControl>
          <FormMessage>{errors.email?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Subject</FormLabel>
          <FormControl>
            <Input {...register("subject", { required: "Subject is required" })} />
          </FormControl>
          <FormMessage>{errors.subject?.message}</FormMessage>
        </FormField>
        <FormField>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea {...register("message", { required: "Message is required" })} />
          </FormControl>
          <FormMessage>{errors.message?.message}</FormMessage>
        </FormField>
        <Button type="submit" className="mt-4">Send Message</Button>
      </Form>
    </div>
  );
};

export default ContactUs;