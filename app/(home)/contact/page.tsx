"use client";

import Image from "next/image";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import formSchema from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { lusitana } from "@/lib/fonts";
import { roboto } from "@/lib/fonts";

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
  });
  return (
    <div className="min-h-screen w-full">
      <Image
        src="/background/contact.jpg"
        fill
        alt="japanese winter landscape"
        className="object-fit"
      />
      <div className="w-full h-full flex flex-col justify-center items-center absolute z-10">
        <h1
          className={`${roboto.className} text-sky-500 text-6xl mb-12 font-bold`}
        >
          Get In Touch
        </h1>
        <Form {...form}>
          <form
            action="https://getform.io/f/954d706a-56a6-48ab-8b04-3c01d8278bd1"
            method="POST"
          >
            <div className="flex flex-row mb-3">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`${lusitana.className} text-sky-500 text-3xl`}
                    >
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-[250px]"
                        placeholder="Your name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`${lusitana.className} text-sky-500 text-3xl ml-5`}
                    >
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-[250px] ml-5"
                        placeholder="Your digits..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel
                    className={`${lusitana.className} text-sky-500 text-3xl`}
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="email..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel
                    className={`${lusitana.className} text-sky-500 text-3xl`}
                  >
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="subject..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-7">
                  <FormLabel
                    className={`${lusitana.className} text-sky-500 text-3xl`}
                  >
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="message body..."
                      rows={7}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="outline" type="submit">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-full h-screen top-0 left-0 absolute bg-black/30 bg-gradient-to-r from-black"></div>
    </div>
  );
};
export default ContactPage;
