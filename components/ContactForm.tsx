"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { lusitana } from "@/utils/fonts";
import { useForm } from "react-hook-form";
import formSchema from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LitButton } from "./ui/LitButton";

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const titleStyles = "contact-font font-semibold text-3xl";
  return (
    <>
      <Form {...form}>
        <form
          action="https://getform.io/f/954d706a-56a6-48ab-8b04-3c01d8278bd1"
          method="POST"
        >
          <div className="flex flex-col sm:flex-row mb-3 w-[300px] sm:w-full">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel className={`${lusitana.className} ${titleStyles}`}>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Your name..."
                      required
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
                    className={`${lusitana.className} ${titleStyles} sm:ml-5`}
                  >
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full sm:w-[250px] sm:ml-5"
                      placeholder="Your digits..."
                      required
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
                <FormLabel className={`${lusitana.className} ${titleStyles}`}>
                  Email
                </FormLabel>
                <FormControl>
                  <Input required placeholder="email..." {...field} />
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
                <FormLabel className={`${lusitana.className} ${titleStyles}`}>
                  Subject
                </FormLabel>
                <FormControl>
                  <Input required placeholder="subject..." {...field} />
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
                <FormLabel className={`${lusitana.className} ${titleStyles}`}>
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    required
                    placeholder="message body..."
                    rows={7}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <LitButton
              title="Send Message"
              type="submit"
              classNames="w-[450px]"
            />
          </div>
        </form>
      </Form>
    </>
  );
};
